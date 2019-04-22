import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from '../util/serializer';
import {PodUtil} from '../util/pod-util';
import {reject} from 'q';
import {Notification} from '../../model/notification';
import {Md5} from 'ts-md5/dist/md5';
import {ILoginService} from '../../service/ILoginService';

export class PodRepository implements Repository {
  constructor(private login: ILoginService) {
  }

  async deleteContact(contact: Contact, callback): Promise<void> {
    return this.login.myContact().then(cont => {
      const urlContacts = cont.urlPod + 'profile/card';
      return PodUtil.readFile(urlContacts).then(res => {
        if (res != null) {
          return Serializer.serializeDeleteContact(contact, res).then(res2 => {
            if (res2.trim() === '') {
              throw new Error('error');
            } else {
              PodUtil.updateFile(urlContacts, res2).then(res3 => {
                callback();
              }, err => {
              });
            }
          });
        } else {
          throw new Error('error');
        }
      }, err => {
        reject(err);
      });
    });
  }

  async updateContact(contact: Contact, callback): Promise<void> {
    return this.login.myContact().then(cont => {
      const urlContacts = cont.urlPod + 'profile/card';
      return PodUtil.readFile(urlContacts).then(res => {
        if (res != null) {
          return Serializer.serializeUpdateContact(contact, res).then(res2 => {
            if (res2.trim() === '') {
              throw new Error('error');
            } else {
              PodUtil.updateFile(urlContacts, res2).then(res3 => {
                callback();
              }, err => {
              });
            }
          });
        } else {
          throw new Error('error');
        }
      }, err => {
        reject(err);
      });
    });
  }

  addContact(contact: Contact): Promise<void> {
    return this.login.myContact().then(cont => {
      const urlContacts = cont.urlPod + 'profile/card';
      return PodUtil.readFile(urlContacts).then(res => {
        if (res != null) {
          return Serializer.serializeContact(contact, res).then(res2 => {
            if (res2.trim() === '') {
                throw new Error('error');
            } else {
              PodUtil.updateFile(urlContacts, res2);
            }
          });
        } else {
          throw new Error('error');
        }
      }, err => {
        reject(err);
      });
    });
  }

  async addMediaMessage(content, message: Message, callback) {
    if (message.text != null && message.isMedia) {
      message.text = message.text.trim();
      const arrayName = message.text.split('.');
      if (arrayName.length === 2 && arrayName[0].match(/[a-f]|[0-9]/g).length === arrayName[0].length) {
        const myContact = await this.login.myContact();
        const urlFolder = myContact.urlPod + 'dechat/files';
        const urlMedia = urlFolder + '/' + message.text;
        PodUtil.createFolder(urlFolder).then(res1 => {
          PodUtil.createFile(urlMedia, content).then(res2 => {
            PodUtil.giveGrantsTo(urlMedia, message.to.urlPod);
            callback();
            this.addMessage(message);
          }, err2 => {});
        }, err1 => {});
      }
    }
  }

  async deleteFileAttached(fileName: string) {
    const myContact = await this.login.myContact();
    const urlMedia = myContact.urlPod + 'dechat/files/' + fileName;
    PodUtil.removeFile(urlMedia);
  }

  async updateMessages(messages: Message[], contact: Contact) {
    const urlMessage = await this.getChatUrl(contact);
    PodUtil.writeToFile(urlMessage, Serializer.serializeMessages(messages));
  }

  async addMessage(message: Message) {
    const urlMessage = await this.getChatUrl(message.to);
    const text = await PodUtil.readFile(urlMessage);
    const messages: Message[] = text == null ? [] : Serializer.deserializeMessages(text);
    messages.push(message);
    PodUtil.writeToFile(urlMessage, Serializer.serializeMessages(messages));
    PodUtil.giveGrantsTo(urlMessage, message.to.urlPod);
  }

  async removeUnknownContact(contacts: Contact[], contact, callback) {
    const contactsUnknown = [];
    for (let i = 0; i < contacts.length; ++i) {
      if (contacts[i].isUnknown) {
        contactsUnknown.push(contacts[i]);
      }
    }
    for (let i = 0; i < contactsUnknown.length; ++i) {
      if (contactsUnknown[i].urlPod === contact.urlPod) {
        contactsUnknown.splice(i);
        const myContact = await this.login.myContact();
        const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
        PodUtil.updateFile(pathUrl, Serializer.serializeUnknownContacts(contactsUnknown)).then(res3 => {
          callback();
        }, err => {});
        break;
      }
    }
  }

  async addUnknownContact(contact: Contact) {
    const myContact = await this.login.myContact();
    const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
    const text = await  PodUtil.readFile(pathUrl);
    const contacts: Contact[] = text == null ? [] : Serializer.deserializeUnknownContacts(text);
    contact.isUnknown = true;
    contacts.push(contact);
    PodUtil.writeToFile(pathUrl, Serializer.serializeUnknownContacts(contacts));
  }

  async getUnknownContacts() {
    const myContact = await this.login.myContact();
    const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
    const text = await PodUtil.readFile(pathUrl);
    const contacts: Contact[] = text == null ? [] : Serializer.deserializeUnknownContacts(text);
    return contacts;
  }

  async getContacts(): Promise<Contact[]> {
    const myContact = await this.login.myContact();
    return Serializer.deserializeContacts(await PodUtil.readFile(myContact.urlPod + 'profile/card#me') == null ? ''
      : await PodUtil.readFile(myContact.urlPod + 'profile/card#me'));
  }

  async getImageContacts(contact: Contact[]) {
    for (let i = 0; i < contact.length; ++i) {
      const imgUrl = Serializer.deserializeImageContacts(await PodUtil.readFile(contact[i].urlPod + 'profile/card#me'));
      imgUrl.then(res => {
        if (res != null) {
          contact[i].imageUrl = contact[i].urlPod + 'profile/' + res;
        }
      });
    }
  }

  async getMessages(contact: Contact): Promise<Message[]> {
    const myContact = await this.login.myContact();
    const allMessages = [];
    const url = await this.getChatUrl(contact);
    const messages = await PodUtil.readFile(url);
    allMessages.push(...await Serializer.deserializeMessages(messages));

    const urlOther = contact.urlPod + 'dechat/' + myContact.urlPod.split('/')[2] + '.json';
    const messagesOther = await PodUtil.readFile(urlOther);
    allMessages.push(...await Serializer.deserializeMessages(messagesOther));
    allMessages.sort((a, b) => {
      return a.date.getTime() - b.date.getTime();
    });

    return allMessages;
  }

  private async getChatUrl(contact: Contact) {
    const myContact = await this.login.myContact();
    const pathUrl = myContact.urlPod + 'dechat/' + contact.urlPod.split('/')[2] + '.json';
    return pathUrl;
  }

  getMyContact(): Promise<Contact> {
    return this.login.myContact();
  }

  logout(action) {
    this.login.logout(action);
  }

  async addNotification(notification: Notification) {
    this.auxAddNotification(notification, '');
  }

  async auxAddNotification(notification: Notification, option: string) {
    const md5Util = new Md5();
    const hashIdentificatorFile = md5Util.appendStr(notification.chatIdentificator).end();
    const urlNotification = notification.message.to.urlPod + 'inbox/dechat.' + hashIdentificatorFile +
      '.' + notification.message.date.getTime() + option + '.json';
    PodUtil.createFile(urlNotification, Serializer.serializeNotification(notification));
  }

  async addNotificationDeletedMessage(notification: Notification) {
    this.auxAddNotification(notification, 'delete');
  }

  async getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]> {
    const me = await this.login.myContact();
    const urlInbox = me.urlPod + 'inbox/';
    return PodUtil.readFolder(urlInbox).then(res => {
      return Serializer.deserializeFolderNameFiles(res).then(listFileNames => {
        const selectedFiles = [];
        if (chatIdentificator != null && chatIdentificator.trim() !== '') {
          const md5Util = new Md5();
          const hashIdentificatorFile = md5Util.appendStr(chatIdentificator).end();
          for (let i = 0; i < listFileNames.length ; ++i) {
            const arrayFileName = listFileNames[i].split('.');
            if (arrayFileName[1].toString() === hashIdentificatorFile) {
              selectedFiles.push(listFileNames[i]);
            }
          }
        } else { // Get all notifications
          selectedFiles.push(...listFileNames);
        }

        let control = 0;
        const notifications = [];
        const readFiles = new Promise((resolve, decline) => {
          for (let i = 0; i < selectedFiles.length; ++i) {
            PodUtil.readFile(urlInbox + selectedFiles[i]).then((leido) => {
              try {
                const not = Serializer.deserializeNotification(leido);
                if (not != null) {
                  notifications.push(not);
                  if (deleteAfterRead) {
                    PodUtil.removeFile(urlInbox + selectedFiles[i]).then((opt) => {
                      ++control;
                      if (control === selectedFiles.length) {
                        resolve('Finish');
                      }
                    });
                  } else {
                    ++control;
                  }
                } else {
                  ++control;
                }
                if (control === selectedFiles.length) {
                  resolve('Finish');
                }
              } catch {
              }
            });
          }
          if (control === selectedFiles.length) {
            resolve('Finish');
          }
        });
        return readFiles.then(() => {
          return notifications;
        });
      });
    }, err => {
      const notifications = [];
      return notifications;
    });
  }

  async deleteNotifications(chatIdentificator: string): Promise<number> {
    const me = await this.login.myContact();
    const urlInbox = me.urlPod + 'inbox/';
    return PodUtil.readFolder(urlInbox).then(res => {
      return Serializer.deserializeFolderNameFiles(res).then(listFileNames => {
        const selectedFiles = [];
        if (chatIdentificator != null && chatIdentificator.trim() !== '') {
          const md5Util = new Md5();
          const hashIdentificatorFile = md5Util.appendStr(chatIdentificator).end();
          for (let i = 0; i < listFileNames.length ; ++i) {
            const arrayFileName = listFileNames[i].split('.');
            if (arrayFileName[1].toString() === hashIdentificatorFile) {
              selectedFiles.push(listFileNames[i]);
            }
          }
        } else {
          selectedFiles.push(...listFileNames);
        }
        const promFor = new Promise((resolve, decline) => {
          let control = 0;
          for (let i = 0; i < selectedFiles.length; ++i) {
            PodUtil.removeFile(urlInbox + selectedFiles[i]).then(tt => {
              if (tt) {
                ++control;
                if (control === selectedFiles.length) {
                  resolve('Finish');
                }
              }
            });
          }
          if (control === selectedFiles.length) {
            resolve('Finish');
          }
        });
        return promFor.then(() => {
          return 1;
        });
      });
    }, err => {
      return -1;
    });
  }
}

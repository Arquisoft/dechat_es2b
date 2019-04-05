import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from '../util/serializer';
import {PodUtil} from '../util/pod-util';
import {reject} from 'q';
import {LoginService} from '../../service/login.service';
import {News} from '../../model/news';
import {Md5} from 'ts-md5/dist/md5';

export class PodRepository implements Repository {
  constructor(private login: LoginService) {
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

  async addMessage(message: Message) {
    const urlMessage = await this.getChatUrl(message.to);
    const text = await PodUtil.readFile(urlMessage);
    const messages: Message[] = text == null ? [] : Serializer.deserializeMessages(text);
    messages.push(message);
    PodUtil.writeToFile(urlMessage, Serializer.serializeMessages(messages));
    PodUtil.giveGrantsTo(urlMessage, message.to.urlPod);
  }

  async getContacts(): Promise<Contact[]> {
    const myContact = await this.login.myContact();
    return Serializer.deserializeContacts(await PodUtil.readFile(myContact.urlPod + 'profile/card#me') == null ? ''
      : await PodUtil.readFile(myContact.urlPod + 'profile/card#me'));
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

  getMyContact(): Promise<Contact> {
    return this.login.myContact();
  }

  logout(action) {
    this.login.logout(action);
  }

  async addNotification(notification: News) {
    const md5Util = new Md5();
    const hashIdentificatorFile = md5Util.appendStr(notification.chatIdentificator).end();
    const urlNotification = notification.message.to.urlPod + 'inbox/dechat.' + hashIdentificatorFile +
      '.' + notification.message.date.getTime() + '.json';
    PodUtil.createFile(urlNotification, Serializer.serializeNotification(notification));
  }

  async getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<News[]> {
    const me = await this.login.myContact();
    const urlInbox = me.urlPod + 'inbox/';
    return PodUtil.readFolder(urlInbox).then(res => {
      return Serializer.deserializeFolderNameFiles(res).then(listFileNames => {
          const selectedFiles = [];
          if (chatIdentificator != null && chatIdentificator.trim() !== '') {
            const md5Util = new Md5();
            const hashIdentificatorFile = md5Util.appendStr(chatIdentificator).end();
            for (let i = 0; i < listFileNames.length; ++i) {
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

          if ('Notification' in window) {
            if (Notification.permission === 'granted') {
              this.showNotifications(notifications);
            } else if (Notification.permission !== 'denied') {
              Notification.requestPermission(permission => {
                if (permission === 'granted') {
                  this.showNotifications(notifications);
                }
              });
            }
          }
          return readFiles.then(() => {
            return notifications;
          });
        }
      );
    }, err => {
      const notifications = [];
      return notifications;
    });
  }

  async showNotifications(notifications) {
    notifications.forEach(notification => {
      const options = {
        body: 'Cuerpo'
      };
      const n = new Notification('Prueba', options);
      setTimeout(n.close.bind(n), 5000);
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
          for (let i = 0; i < listFileNames.length; ++i) {
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

  private async getChatUrl(contact: Contact) {
    const myContact = await this.login.myContact();
    const pathUrl = myContact.urlPod + 'dechat/' + contact.urlPod.split('/')[2] + '.json';
    return pathUrl;
  }
}

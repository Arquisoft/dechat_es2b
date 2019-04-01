import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from '../util/serializer';
import {PodUtil} from '../util/pod-util';
import {reject} from 'q';
import {LoginService} from '../../service/login.service';
import {Notification} from '../../model/notification';

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
    return Serializer.deserializeContacts(await PodUtil.readFile(myContact.urlPod + 'profile/card#me') == null ? '' : await PodUtil.readFile(myContact.urlPod + 'profile/card#me'));
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
  }

  async getNotifications(chatIdentificator: string): Promise<Notification[]> {
    if (chatIdentificator == null) { // Get all notifications

    } else {

    }
    return undefined;
  }

  async deleteNotifications(chatIdentificator: string) {
  }
}

import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from '../util/serializer';
import {PodUtil} from '../util/pod-util';
import {reject} from 'q';
import {LoginService} from '../../service/login.service';

export class PodRepository implements Repository {
  constructor(private login: LoginService) {
  }

  private async getChatUrl(contact: Contact) {
    const myContact = await this.login.myContact();
    const mainUrl = 'https://' + myContact.urlPod.split('/')[2];
    const pathUrl = mainUrl + '/dechat/' + contact.urlPod.split('/')[2] + '.json';
    return pathUrl;
  }

  addContact(contact: Contact): Promise<void> {
    const urlContacts = '';
    return PodUtil.readFile(urlContacts).then(res => {
      PodUtil.writeToFile(urlContacts, Serializer.serializeContact(contact, res));
    }, err => {
      reject(err);
    });
  }

  async addMessage(message: Message, contact: Contact) {
    const urlMessage = await this.getChatUrl(contact);
    const text = await PodUtil.readFile(urlMessage);
    const messages: Message[] = text == null ? [] : Serializer.deserializeMessages(text);
    messages.push(message);
    PodUtil.writeToFile(urlMessage, Serializer.serializeMessages(messages));
  }

  async getContacts(): Promise<Contact[]> {
    const myContact = await this.login.myContact();
    return Serializer.deserializeContacts(await PodUtil.readFile(myContact.urlPod));
  }

  async getMessages(contact: Contact): Promise<Message[]> {
    const url = await this.getChatUrl(contact);
    return Serializer.deserializeMessages(await PodUtil.readFile(url));
  }
}

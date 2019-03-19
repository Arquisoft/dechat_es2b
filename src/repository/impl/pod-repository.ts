import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {Serializer} from '../util/serializer';
import {PodUtil} from '../util/pod-util';
import {reject} from 'q';

export class PodRepository implements Repository {
  constructor() {
  }

  addContact(contact: Contact): Promise<void> {
    const urlContacts = '';
    return PodUtil.readFile(urlContacts).then(res => {
      PodUtil.writeToFile(urlContacts, Serializer.serializeContact(contact, res));
    }, err => {
      reject(err);
    });
  }

  async addMessage(message: Message) {
    const urlMessage = '';
    const text = await PodUtil.readFile(urlMessage);
    const messages: Message[] = text == null ? [] : Serializer.deserializeMessages(text);
    messages.push(message);
    PodUtil.writeToFile(urlMessage, Serializer.serializeMessages(messages));
  }

  async getContacts(): Promise<Contact[]> {
    return Serializer.deserializeContacts(await PodUtil.readFile(''));
  }

  async getMessages(contact: Contact): Promise<Message[]> {
    return Serializer.deserializeMessages(await PodUtil.readFile(''));
  }
}

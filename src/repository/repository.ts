import {Contact} from '../model/contact';
import {Message} from '../model/message';

export interface Repository {
  addContact(contact: Contact): void;

  getContacts(): Contact[];

  addMessage(message: Message): void;

  getMessages(contact: Contact): Message[];
}

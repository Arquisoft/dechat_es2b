import {Contact} from '../model/contact';
import {Message} from '../model/message';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addMessage(message: Message, contact: Contact);

  getMessages(contact: Contact): Promise<Message[]>;
}

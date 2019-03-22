import {Contact} from '../model/contact';
import {Message} from '../model/message';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addMessage(message: Message);

  getMessages(contact: Contact): Promise<Message[]>;

  getMyContact(): Promise<Contact>;

  logout(action);
}

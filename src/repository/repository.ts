import {Contact} from '../model/contact';
import {Message} from '../model/message';

export interface Repository {
  addContact(contact: Contact): Promise<Contact>;

  getContacts(): Contact[];

  addMessage(message: Message): Promise<Message>;

  getMessages(contact: Contact): Message[];
}

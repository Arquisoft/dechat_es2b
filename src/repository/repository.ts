import {Contact} from '../model/contact';
import {Message} from '../model/message';
import {News} from '../model/news';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addNotification(notification: News);

  getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<News[]>;

  deleteNotifications(chatIdentificator: string);

  addMessage(message: Message);

  getMessages(contact: Contact): Promise<Message[]>;

  getMyContact(): Promise<Contact>;

  logout(action);
}

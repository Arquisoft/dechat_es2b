import {Contact} from '../model/contact';
import {Message} from '../model/message';
import {Notification} from '../model/notification';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addNotification(notification: Notification);

  getNotifications(chatIdentificator: string): Promise<Notification[]>;

  deleteNotifications(chatIdentificator: string);

  addMessage(message: Message);

  getMessages(contact: Contact): Promise<Message[]>;

  getMyContact(): Promise<Contact>;

  logout(action);
}

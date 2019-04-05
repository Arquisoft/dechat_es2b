import {Contact} from '../model/contact';
import {Message} from '../model/message';
import {Notification} from '../model/notification';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  deleteContact(contact: Contact, callback): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addNotification(notification: Notification);

  getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]>;

  deleteNotifications(chatIdentificator: string);

  getImageContacts(contact: Contact[]);

  addMessage(message: Message);

  getMessages(contact: Contact): Promise<Message[]>;

  getMyContact(): Promise<Contact>;

  logout(action);
}

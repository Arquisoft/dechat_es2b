import {Contact} from '../model/contact';
import {Message} from '../model/message';
import {Notification} from '../model/notification';

export interface Repository {
  addContact(contact: Contact): Promise<void>;

  deleteContact(contact: Contact, callback): Promise<void>;

  updateContact(contact: Contact, callback): Promise<void>;

  getContacts(): Promise<Contact[]>;

  addNotification(notification: Notification);

  addNotificationDeletedMessage(notification: Notification);

  getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]>;

  deleteNotifications(chatIdentificator: string);

  getImageContacts(contact: Contact[]);

  deleteFileAttached(fileName: string);

  updateMessages(messages: Message[], contact: Contact);

  addMediaMessage(content, message: Message, callback);

  addMessage(message: Message);

  addUnknownContact(contact: Contact);

  getUnknownContacts();

  removeUnknownContact(contacts: Contact[], contact, callback);

  getMessages(contact: Contact): Promise<Message[]>;

  getMyContact(): Promise<Contact>;

  logout(action);
}

import { Contact } from '../model/contact';
import { Message } from '../model/message';
import { Notification } from '../model/notification';
export interface Repository {
    addContact(contact: Contact): Promise<void>;
    deleteContact(contact: Contact, callback: any): Promise<void>;
    updateContact(contact: Contact, callback: any): Promise<void>;
    getContacts(): Promise<Contact[]>;
    addNotification(notification: Notification): any;
    addNotificationDeletedMessage(notification: Notification): any;
    getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]>;
    deleteNotifications(chatIdentificator: string): any;
    getImageContacts(contact: Contact[]): any;
    deleteFileAttached(fileName: string): any;
    updateMessages(messages: Message[], contact: Contact): any;
    addMediaMessage(content: any, message: Message, callback: any): any;
    addMessage(message: Message): any;
    addUnknownContact(contact: Contact): any;
    getUnknownContacts(): any;
    removeUnknownContact(contacts: Contact[], contact: any, callback: any): any;
    getMessages(contact: Contact): Promise<Message[]>;
    getMyContact(): Promise<Contact>;
    logout(action: any): any;
}

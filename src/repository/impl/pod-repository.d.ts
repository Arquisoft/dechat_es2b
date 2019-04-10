import { Repository } from '../repository';
import { Contact } from '../../model/contact';
import { Message } from '../../model/message';
import { Notification } from '../../model/notification';
import { ILoginService } from '../../service/ILoginService';
export declare class PodRepository implements Repository {
    private login;
    constructor(login: ILoginService);
    deleteContact(contact: Contact, callback: any): Promise<void>;
    addContact(contact: Contact): Promise<void>;
    addMessage(message: Message): Promise<void>;
    removeUnknownContact(contacts: Contact[], contact: any, callback: any): Promise<void>;
    addUnknownContact(contact: Contact): Promise<void>;
    getUnknownContacts(): Promise<Contact[]>;
    getContacts(): Promise<Contact[]>;
    getImageContacts(contact: Contact[]): Promise<void>;
    getMessages(contact: Contact): Promise<Message[]>;
    private getChatUrl;
    getMyContact(): Promise<Contact>;
    logout(action: any): void;
    addNotification(notification: Notification): Promise<void>;
    getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]>;
    deleteNotifications(chatIdentificator: string): Promise<number>;
}

import { Message } from '../../model/message';
import { Contact } from '../../model/contact';
import { Notification } from '../../model/notification';
export declare class Serializer {
    static serializeMessages: (messages: Message[]) => string;
    static serializeUnknownContacts: (contacts: Contact[]) => string;
    static serializeNotification: (notification: Notification) => string;
    static deserializeFolderNameFiles: (data: string) => Promise<string[]>;
    static deserializeNotification: (data: string) => Notification;
    static deserializeMessages: (data: string) => Message[];
    static deserializeUnknownContacts: (data: string) => Contact[];
    static serializeContact: (newContact: Contact, oldData: string) => Promise<string>;
    static serializeDeleteContact: (delContact: Contact, oldData: string) => Promise<string>;
    static deserializeContacts: (data: string) => Promise<any[]>;
    static deserializeImageContacts: (data: string) => Promise<any>;
    private static classifyQuads;
    private static rebuildContacts;
}

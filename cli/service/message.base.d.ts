import { Message } from '../model/message';
import { Contact } from '../model/contact';
import { RepositoryFactoryBase } from '../repository/repository-factory.base';
export declare class MessageBase {
    repository: RepositoryFactoryBase;
    constructor(repository: RepositoryFactoryBase);
    addMessage(message: Message): void;
    deleteMessages(contact: Contact, messages: Message[]): void;
    deleteMessage(contact: Contact, message: Message, wasMedia: boolean): Promise<void>;
    addMediaMessage(content: any, message: Message, callback: any): void;
    getMessages(contact: Contact): Promise<Message[]>;
    private error;
}

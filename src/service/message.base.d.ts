import { Message } from '../model/message';
import { Contact } from '../model/contact';
import { RepositoryFactoryBase } from '../repository/repository-factory.base';
export declare class MessageBase {
    repository: RepositoryFactoryBase;
    constructor(repository: RepositoryFactoryBase);
    addMessage(message: Message): void;
    getMessages(contact: Contact): Promise<Message[]>;
    private error;
}

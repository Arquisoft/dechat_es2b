import { Message } from '../model/message';
import { RepositoryFactoryService } from '../repository/repository-factory.service';
import { Contact } from '../model/contact';
export declare class MessageService {
    repository: RepositoryFactoryService;
    constructor(repository: RepositoryFactoryService);
    addMessage(message: Message): void;
    getMessages(contact: Contact): Promise<Message[]>;
    private error;
}

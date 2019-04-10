import { Contact } from '../model/contact';
import { RepositoryFactoryService } from '../repository/repository-factory.service';
export declare class ContactService {
    repository: RepositoryFactoryService;
    private contacts;
    constructor(repository: RepositoryFactoryService);
    addContact(contact: Contact): Promise<number>;
    addUnknownContact(contact: Contact): void;
    deleteContact(contact: Contact, callback: any, contacts: Contact[]): any;
    getContacts(): Promise<Contact[]>;
    getUnknownContacts(): Promise<any>;
    getContactsImages(contact: Contact[]): void;
}

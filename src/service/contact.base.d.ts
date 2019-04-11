import { Contact } from '../model/contact';
import { RepositoryFactoryBase } from '../repository/repository-factory.base';
export declare class ContactBase {
    repository: RepositoryFactoryBase;
    private contacts;
    constructor(repository: RepositoryFactoryBase);
    addContact(contact: Contact): Promise<number>;
    addUnknownContact(contact: Contact): void;
    deleteContact(contact: Contact, callback: any, contacts: Contact[]): any;
    getContacts(): Promise<Contact[]>;
    getUnknownContacts(): Promise<any>;
    getContactsImages(contact: Contact[]): void;
}

import {Contact} from '../model/contact';
import {RepositoryFactoryBase} from '../repository/repository-factory.base';

export class ContactBase {
  private contacts: Contact[] = [];

  constructor(public repository: RepositoryFactoryBase) {
  }

  addContact(contact: Contact) {
    return this.repository.repository.addContact(contact).then(() => 1, () => 0);
  }

  addUnknownContact(contact: Contact) {
    this.repository.repository.addUnknownContact(contact);
  }

  deleteContact(contact: Contact, callback, contacts: Contact[]) {
    if (contact.isUnknown) {
      return this.repository.repository.removeUnknownContact(contacts, contact, callback);
    } else {
      return this.repository.repository.deleteContact(contact, callback);
    }
  }

  getContacts(): Promise<Contact[]> {
    return this.repository.repository.getContacts();
  }

  async getUnknownContacts() {
    const contacts = await this.repository.repository.getUnknownContacts();
    return contacts;
  }

  getContactsImages(contact: Contact[]) {
    this.repository.repository.getImageContacts(contact);
  }
}

import {Contact} from '../model/contact';
import {RepositoryFactoryBase} from '../repository/repository-factory.base';

export class ContactBase {
  private contacts: Contact[] = [];

  constructor(public repository: RepositoryFactoryBase) {
  }

  addContact(contact: Contact) {
    return this.repository.repository.addContact(contact).then(() => 1, () => 0);
  }

  updateContact(contact: Contact, callback) {
    if (!contact.isUnknown) {
      return this.repository.repository.updateContact(contact, callback);
    }
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
    return this.repository.repository.getUnknownContacts();
  }

  getContactsImages(contact: Contact[]) {
    this.repository.repository.getImageContacts(contact);
  }
}

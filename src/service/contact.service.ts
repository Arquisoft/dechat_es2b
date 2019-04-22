import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {RepositoryFactoryService} from '../repository/repository-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor(public repository: RepositoryFactoryService) {
    repository.repository.getContacts().then(contacts => this.contacts = contacts);
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

  updateContact(contact: Contact, callback) {
    if (!contact.isUnknown) {
      return this.repository.repository.updateContact(contact, callback);
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

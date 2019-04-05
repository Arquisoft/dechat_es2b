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

  deleteContact(contact: Contact, callback) {
    return this.repository.repository.deleteContact(contact, callback);
  }

  getContacts(): Promise<Contact[]> {
    return this.repository.repository.getContacts();
  }
}

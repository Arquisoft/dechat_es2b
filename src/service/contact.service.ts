import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {RepositoryFactoryService} from '../repository/repository-factory.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[];

  constructor(public repository: RepositoryFactoryService) {
  }

  addContact(contact: Contact) {
    return this.repository.repository.addContact(contact).then(() => 1, () => 0);
  }

  getContacts(): Promise<Contact[]> {
    return this.repository.repository.getContacts();
  }
}

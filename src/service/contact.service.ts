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
    this.contacts.push(contact);
    this.repository.repository.addContact(contact).then(() => {
    }, () => this.error(contact));
  }

  getContacts(): Promise<Contact[]> {
    return this.repository.repository.getContacts();
  }

  private error(contact: Contact) {
    this.contacts.splice(this.contacts.indexOf(contact), 1);
    alert('Error al añadir el contacto: ' + contact.urlPod);
  }
}

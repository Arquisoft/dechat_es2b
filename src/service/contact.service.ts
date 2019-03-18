import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor() {
  }

  addContact(contact: Contact) {

  }

  getContacts(): Contact[] {
    return [];
  }
}

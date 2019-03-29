import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';

export class MockRepository implements Repository {
  contacts: Contact[] = [];
  messages: Message[] = [];
  myContact: Contact = null;
  logedIn = false;

  addContact(contact: Contact): Promise<void> {
    return new Promise(() => {
      this.contacts.push(contact);
    });
  }

  addMessage(message: Message) {
    return new Promise(() => {
      this.messages.push(message);
    });
  }

  getContacts(): Promise<Contact[]> {
    return new Promise(() => {
      this.myContact = new Contact('https://myPod.mock.up/', 'Prueba');
      return this.contacts;
    });
  }

  getMessages(contact: Contact): Promise<Message[]> {
    return new Promise(() => {
      this.getMyContact().then(myContact => {
        return this.messages;
      });
    });
  }

  getMyContact(): Promise<Contact> {
    return new Promise(() => {
      this.logedIn = true;
      return this.myContact;
    });
  }

  logout(action) {
    this.myContact = null;
    this.logedIn = false;
    if (action != null) {
      action();
    }
  }

}

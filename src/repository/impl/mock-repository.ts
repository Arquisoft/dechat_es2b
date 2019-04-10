import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {reject} from 'q';
import {Notification} from '../../model/notification';

export class MockRepository implements Repository {
  contacts: Contact[] = [];
  messages: Message[] = [];
  myContact: Contact = null;
  logedIn = false;
  nextAddContactError = false;

  addContact(contact: Contact): Promise<void> {
    if (this.nextAddContactError) {
      this.nextAddContactError = false;
      return new Promise<void>(() => {
        reject('Error');
      });
    } else {
      return new Promise(() => {
        this.contacts.push(contact);
      });
    }
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

  addNotification(notification: Notification) {
  }

  getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]> {
    return undefined;
  }

  deleteNotifications(chatIdentificator: string) {
  }


  getImageContacts(contact: Contact[]) {
  }

  deleteContact(contact: Contact, callback): Promise<void> {
    return undefined;
  }

  addUnknownContact(contact: Contact) {
  }

  getUnknownContacts() {
    return undefined;
  }

  removeUnknownContact(contacts: Contact[], contact, callback) {
  }

  updateContact(contact: Contact, callback): Promise<void> {
    return undefined;
  }
}

import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {reject} from 'q';
import {Notification} from '../../model/notification';

export class MockRepository implements Repository {
  contacts: Contact[] = [];
  messages: Message[] = [];
  notifications: Notification[] = [];
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

  login(contact: Contact) {
    this.myContact = contact;
    this.logedIn = true;
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
    this.notifications.push(notification);
  }

  getNotifications(chatIdentificator: string, deleteAfterRead: boolean): Promise<Notification[]> {
    return new Promise<Notification[]>(() => {
      return this.notifications;
    });
  }

  deleteNotifications(chatIdentificator: string) {
    this.notifications = this.notifications.filter(n => n.chatIdentificator !== chatIdentificator);
  }


  getImageContacts(contact: Contact[]) {
  }

  deleteContact(contact: Contact, callback): Promise<void> {
    return new Promise<void>(() => {
      return;
    });
  }

  addUnknownContact(contact: Contact) {
  }

  getUnknownContacts() {
    return new Promise<Contact[]>(() => {
      return [];
    });
  }

  removeUnknownContact(contacts: Contact[], contact, callback) {
  }

  updateContact(contact: Contact, callback): Promise<void> {
    return new Promise<void>(() => {
      return;
    });
  }

  addMediaMessage(content, message: Message, callback) {
  }

  addNotificationDeletedMessage(notification: Notification) {
    this.notifications = this.notifications.filter(n => n !== notification);
  }

  deleteFileAttached(fileName: string) {
  }

  updateMessages(messages: Message[], contact: Contact){
  }
}

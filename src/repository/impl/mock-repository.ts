import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';

export class MockRepository implements Repository {
  addContact(contact: Contact): Promise<void> {
    return undefined;
  }

  addMessage(message: Message) {
  }

  getContacts(): Promise<Contact[]> {
    return new Promise(() => {
      const contacts = [];
      contacts.push(new Contact('https://prueba1.mock.up/', 'Prueba1'));
      contacts.push(new Contact('https://prueba2.mock.up/', 'Prueba2'));
      return contacts;
    });
  }

  getMessages(contact: Contact): Promise<Message[]> {
    return new Promise(() => {
      this.getMyContact().then(myContact => {
        const messages = [];
        messages.push(new Message(contact, myContact, new Date(), 'Mensaje 1'));
        messages.push(new Message(myContact, contact, new Date(), 'Mensaje 2'));
        messages.push(new Message(contact, myContact, new Date(), 'Mensaje 3'));
        messages.push(new Message(myContact, contact, new Date(), 'Mensaje 4'));
        return messages;
      });
    });
  }

  getMyContact(): Promise<Contact> {
    return new Promise(() => {
      return new Contact('https://myPod.mock.up/', 'Prueba');
    });
  }

  logout(action) {
    action();
  }

}

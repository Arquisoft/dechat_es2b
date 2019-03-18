import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';

export class PodRepository implements Repository {
  constructor() {

  }

  addContact(contact: Contact): Promise<Contact> {
    return undefined;
  }

  addMessage(message: Message): Promise<Message> {
    return undefined;
  }

  getContacts(): Contact[] {
    return [];
  }

  getMessages(contact: Contact): Promise<Message> {
    return undefined;
  }
}

import {Repository} from '../repository';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';

export class PodRepository implements Repository {
  constructor(urlMyPod: string) {
    this._urlMyPod = urlMyPod;
  }

  private _urlMyPod: string;

  get urlMyPod(): string {
    return this._urlMyPod;
  }

  set urlMyPod(value: string) {
    this._urlMyPod = value;
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

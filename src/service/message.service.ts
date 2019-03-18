import {Injectable} from '@angular/core';
import {Message} from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor() {
  }

  addMessage(message: Message) {

  }

  getMessages(): Message[] {
    return [];
  }
}

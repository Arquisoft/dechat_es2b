import {Component} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  contact: Contact;
  messages: Message[];

  constructor() {
    this.messages = [new Message(null, null, new Date(), 'Hola'), new Message(null, null, new Date(), '¿Que tal?')];
  }

  showMessages = async () => {

  }

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.showMessages();
  }
}

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
  message = '';

  constructor() {
    this.messages = [new Message(null, null, new Date(), 'Hola'), new Message(null, null, new Date(), '¿Que tal?')];
  }

  sendMessage(event: KeyboardEvent) {
    if (event == null || event.key === 'Enter') {
      console.log(this.message);
      this.message = '';
      if (event != null) {
        event.preventDefault();
      }
    }
  }

  showMessages = async () => {

  };

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.showMessages();
  }
}

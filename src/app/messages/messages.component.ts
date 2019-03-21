import {Component, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {LoginService} from '../../service/login.service';
import {MessageService} from '../../service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  contact: Contact;
  messages: Message[];
  message = '';

  constructor(private loginService: LoginService, private messageService: MessageService) {
    this.messages = [new Message(null, null, new Date(), 'Hola'), new Message(null, null, new Date(), '¿Que tal?')];
  }

  showMenu() {
    $('.action_menu').toggle();
  }

  logout() {
    this.loginService.logout(null);
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

  }

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.messageService.getMessages(this.contact);
    this.showMessages();
  }
}

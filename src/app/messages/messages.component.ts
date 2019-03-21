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
  info = '';
  placeHolderMessage = 'Type your message...';

  constructor(private loginService: LoginService, private messageService: MessageService) {
    // this.messages = [new Message(null, null, new Date(), 'Hola'), new Message(null, null, new Date(), '¿Que tal?')];
    if (this.contact == null) {
      this.info = 'Welcome to DeChat!';
      this.placeHolderMessage = 'Select a contact to continue';
    } else {
      this.placeHolderMessage = 'Type your message...';
    }
  }

  showMenu() {
    $('.action_menu').toggle();
  }

  logout() {
    this.loginService.logout(null);
  }

  async sendMessage(event: KeyboardEvent) {
    this.message.trim()
    if ((event == null || event.key === 'Enter') && this.message !== '') {
      const mess = new Message((await this.loginService.myContact()), this.contact, new Date(), this.message);
      this.messageService.addMessage(mess);
      // this.messages.push(mess);
      this.message = '';
      if (event != null) {
        event.preventDefault();
      }
    }
  }

  showMessages = async () => {
    this.messages = await this.messageService.getMessages(this.contact);
  }

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.messageService.getMessages(this.contact);
    this.placeHolderMessage = 'Type your message...';
    setInterval(this.showMessages, 2000);
  }
}

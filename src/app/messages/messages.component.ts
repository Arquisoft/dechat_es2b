import {Component, ElementRef, ViewChild} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  myContact: Contact;
  contact: Contact;
  messages: Message[];
  message = '';
  @ViewChild('messages') private messagesContainer: ElementRef;

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService) {
    this.makeSureLogin();
  }

  makeSureLogin = async () => {
    this.myContact = await this.repositoryFactoryService.repository.getMyContact();
  }

  showMenu() {
    $('.action_menu').toggle();
  }

  logout() {
    this.repositoryFactoryService.repository.logout(null);
  }

  async sendMessage(event: KeyboardEvent) {
    this.message.trim();
    if ((event == null || event.key === 'Enter') && this.message !== '') {
      const mess = new Message(this.myContact, this.contact, new Date(), this.message);
      this.messageService.addMessage(mess);
      // this.messages.push(mess);
      this.message = '';
      if (event != null) {
        event.preventDefault();
      }
    }
  }

  showMessages = async () => {
    this.messageService.getMessages(this.contact).then((res) => {
      this.messages = res;
    });
  };

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.messageService.getMessages(this.contact);
    setInterval(this.showMessages, 2000);
  }
}

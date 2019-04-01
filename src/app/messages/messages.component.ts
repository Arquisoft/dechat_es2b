import {Component, ElementRef, ViewChild} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';
import {NotificationService} from '../../service/notification.service';

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

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService,
              private notificationService: NotificationService) {
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
      this.notificationService.sendNewMessageNotification(mess);
      this.notificationService.getCurrentChatNotifications(null).then(res => {
        console.log(res.length + ' - Cantidad de notificaciones totales');
      });
      // this.notificationService.deleteChatNotifications('https://acg96.inrupt.net/');
    }
  }

  updateScroll() {
    const element = document.getElementById('messagesBox');
    if (element != null) {
      element.scrollTop = element.scrollHeight;
    }
  }

  showMessages = async () => {
    this.messageService.getMessages(this.contact).then((res) => {
        this.messages = res;
        const wait = new Promise(resolve => setTimeout(resolve, 500)).then(() => {
          this.updateScroll();
        });
    });
  };

  selectConversation(contact: Contact) {
    this.contact = contact;
    this.showMessages();
    setInterval(this.showMessages, 1300);
  }
}

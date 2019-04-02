import {Component, ElementRef, OnInit, SimpleChanges, ViewChild} from '@angular/core';
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
export class MessagesComponent implements OnInit {
  myContact: Contact;
  contact: Contact;
  messages: Message[];
  message = '';
  @ViewChild('messages') private messagesContainer: ElementRef;
  hashMessages: Map<string, Message[]>;
  controlFind: boolean;

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService,
              private notificationService: NotificationService) {
    this.makeSureLogin();
    this.hashMessages = new Map<string, Message[]>();
    this.controlFind = false;
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
      this.hashMessages.get(this.contact.urlPod).push(mess);
      this.message = '';
      if (event != null) {
        event.preventDefault();
      }
      this.notificationService.sendNewMessageNotification(mess);
    }
  }

  showMessages = async () => {
    this.messages = this.hashMessages.get(this.contact.urlPod);
  };

  findNewMessages = async () => {
    if (!this.controlFind) {
      this.controlFind = true;
      this.notificationService.getAllNotificationsAndDelete().then(res => {
        this.controlFind = false;
        const hashNew = this.notificationService.classifyNotificationsPerChat(res);
        let arrayAux = [];
        // First the current chat
        if (hashNew.has(this.contact.urlPod)) {
          arrayAux = hashNew.get(this.contact.urlPod);
          this.hashMessages.get(this.contact.urlPod).push(...arrayAux);
          this.hashMessages.get(this.contact.urlPod).sort((a, b) => {
            return a.date.getTime() - b.date.getTime();
          });
          this.showMessages();
        }
        // Now the rest
        for (const key in hashNew.keys()) {
          if (key !== this.contact.urlPod) {
            if (this.hashMessages.has(key)) {
              arrayAux = hashNew.get(key);
              this.hashMessages.get(key).push(...arrayAux);
              this.hashMessages.get(key).sort((a, b) => {
                return a.date.getTime() - b.date.getTime();
              });
            } else {
              // Here we would be able to check if someone who we don't have added as contact have written to us
            }
          }
        }
      });
    }
  }

  selectConversation(contact: Contact) {
    if (this.contact == null) {
      setInterval(this.findNewMessages, 1000);
    }
    this.contact = contact;
    if (!this.hashMessages.has(this.contact.urlPod)) {
      this.messageService.getMessages(contact).then((res) => {
        this.hashMessages.set(this.contact.urlPod, res);
        this.showMessages();
      });
    } else {
      this.findNewMessages();
      this.showMessages();
    }
  }

  ngOnInit(): void {
  }
}

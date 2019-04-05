import {Component, ElementRef, Inject, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';
import {NotificationService} from '../../service/notification.service';
import {ContactService} from '../../service/contact.service';
import {AppComponent} from '../app.component';

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
  hashMessages: Map<string, Message[]>;
  controlFind: boolean;
  appComponent: AppComponent;
  initState: boolean;
  @ViewChild('messages') private messagesContainer: ElementRef;

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService, private contactService: ContactService,
              private notificationService: NotificationService) {
    this.makeSureLogin();
    this.hashMessages = new Map<string, Message[]>();
    this.controlFind = false;
    this.initState = true;
  }

  makeSureLogin = async () => {
    this.myContact = await this.repositoryFactoryService.repository.getMyContact();
  };

  showMenu() {
    $('.action_menu').toggle();
  }

  logout() {
    this.showMenu();
    this.repositoryFactoryService.repository.logout(null);
  }

  async sendMessage(event: KeyboardEvent) {
    this.message.trim();
    if ((event == null || event.key === 'Enter') && this.message !== '') {
      const mess = new Message(this.myContact, this.contact, new Date(), this.message);
      this.messageService.addMessage(mess);
      if (!this.hashMessages.has(this.contact.urlPod)) {
        this.hashMessages.set(this.contact.urlPod, []);
      }
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
        if (res != null && res.length > 0) {
          const hashNew = this.notificationService.classifyNotificationsPerChat(res);
          let arrayAux = [];
          // First the current chat
          if (this.contact != null && hashNew.has(this.contact.urlPod) && this.hashMessages.has(this.contact.urlPod)) {
            arrayAux = hashNew.get(this.contact.urlPod);
            this.hashMessages.get(this.contact.urlPod).push(...arrayAux);
            this.hashMessages.get(this.contact.urlPod).sort((a, b) => {
              return a.date.getTime() - b.date.getTime();
            });
            this.showMessages();
          }
          // Now the rest
          const iteratorKeys = hashNew.keys();
          let key = iteratorKeys.next().value;
          while (key != null) {
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
            key = iteratorKeys.next().value;
          }
        }
      });
    }
  };

  selectConversation(contact: Contact, appComponent) {
    if (this.contact == null && this.initState) {
      this.initState = false;
      this.appComponent = appComponent;
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

  deleteContact(): void {
    if (this.contact != null) {
      this.showMenu();
      this.contactService.deleteContact(this.contact, () => {
        this.appComponent.getContactsComponent().ngOnInit();
        this.hashMessages.delete(this.contact.urlPod);
        this.contact = null;
      });
    }
  }

  ngOnInit(): void {
  }
}

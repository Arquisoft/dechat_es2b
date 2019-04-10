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
  @ViewChild('messages') private messagesContainer: ElementRef;
  toggleShowed: boolean;

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService, private contactService: ContactService,
              private notificationService: NotificationService, public eRef: ElementRef) {
    this.makeSureLogin();
    this.hashMessages = new Map<string, Message[]>();
    this.controlFind = false;
    setInterval(this.findNewMessages, 1000);
    this.toggleShowed = false;
  }

  makeSureLogin = async () => {
    this.myContact = await this.repositoryFactoryService.repository.getMyContact();
  };

  showMenu() {
    $('.action_menu').toggle();
    this.toggleShowed = ! this.toggleShowed;
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
            let currentUrl = null;
            if (this.contact != null) {
              currentUrl = this.contact.urlPod;
            }
            if (key !== currentUrl) {
              if (this.hashMessages.has(key)) {
                arrayAux = hashNew.get(key);
                this.hashMessages.get(key).push(...arrayAux);
                this.hashMessages.get(key).sort((a, b) => {
                  return a.date.getTime() - b.date.getTime();
                });
              } else {
                // Here we would be able to check if someone who we don't have added as contact have written to us
                if (this.appComponent == null) {
                  this.contactService.getContacts().then(resCont => {
                    this.contactService.getUnknownContacts().then(resCont2 => {
                      resCont.push(... resCont2);
                      this.checkAndSaveNewUnknownContacts(resCont, key);
                    });
                  });
                } else {
                  this.checkAndSaveNewUnknownContacts(this.appComponent.contactsComponent.allContacts, key);
                }
              }
            }
            key = iteratorKeys.next().value;
          }
        }
      });
    }
  };

  checkAndSaveNewUnknownContacts(contacts, key) {
    let unknown = true;
    for (let i = 0; i < contacts.length; ++i) {
      if (contacts[i].urlPod === key) {
        unknown = false;
        break;
      }
    }
    if (unknown) {
      const contact = new Contact(key, 'Unknown');
      contact.isUnknown = true;
      this.contactService.addUnknownContact(contact);
      if (this.appComponent != null) {
        this.appComponent.getContactsComponent().ngOnInit();
      }
    }
  }

  setAppComponent(appComponent): void {
    this.appComponent = appComponent;
  }

  selectConversation(contact: Contact, appComponent) {
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

  editContact() {
    if (!this.contact.isUnknown) {
      this.appComponent.getContactsComponent().openModifyContact(this.contact);
    }
  }

  addToContact() {
    this.appComponent.getContactsComponent().openAddContact(this.contact.urlPod);
  }

  deleteContact(): void {
    if (this.contact != null) {
      this.showMenu();
      this.contactService.deleteContact(this.contact, () => {
        this.appComponent.getContactsComponent().ngOnInit();
        this.messages = [];
        this.hashMessages.delete(this.contact.urlPod);
        this.contact = null;
      }, this.appComponent.getContactsComponent().allContacts);
    }
  }

  ngOnInit(): void {
  }
}

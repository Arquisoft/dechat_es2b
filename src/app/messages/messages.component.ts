/* tslint:disable:prefer-for-of */
import {Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Contact} from '../../model/contact';
import {Message} from '../../model/message';
import {MessageService} from '../../service/message.service';
import {RepositoryFactoryService} from '../../repository/repository-factory.service';
import {NotificationService} from '../../service/notification.service';
import {ContactService} from '../../service/contact.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Md5} from 'ts-md5';
import {MessagingComponent} from '../messaging/messaging.component';
import * as $ from 'jquery';
import {Router} from '@angular/router';

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
  appComponent: MessagingComponent;
  toggleShowed: boolean;
  optUploaded: string;
  optionUploaded: string;
  @ViewChild('contentModal')
  private editModal: TemplateRef<any>;
  error = false;

  constructor(public repositoryFactoryService: RepositoryFactoryService, private messageService: MessageService,
              private contactService: ContactService, private notificationService: NotificationService,
              private modalService: NgbModal, private router: Router) {
    this.makeSureLogin();
    this.hashMessages = new Map<string, Message[]>();
    this.controlFind = false;
    setInterval(this.findNewMessages, 1000);
    this.toggleShowed = false;
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (event.target.id !== 'action_menu_btn' && event.target.id !== 'action_menu_btn2') {
      if (this.toggleShowed) {
        this.showMenu();
      }
    }
  }

  makeSureLogin = async () => {
    this.myContact = await this.repositoryFactoryService.repository.getMyContact();
  }

  showDeleteAllOwnMessages(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      const toDelete = [];
      for (let i = 0; i < this.messages.length; ++i) {
        const message = this.messages[i];
        if (!message.isDeleted && message.to.urlPod === this.contact.urlPod) {
          const wasMedia = message.isMedia;
          message.isDeleted = true;
          message.isMedia = false;
          this.notificationService.deleteMessageNotification(message);
          toDelete.push(message);
        }
      }
      this.messageService.deleteMessages(this.contact, toDelete);
    }, (reason) => {
    });
  }

  showMenu() {
    $('.action_menu').toggle();
    this.toggleShowed = !this.toggleShowed;
  }

  logout() {
    this.showMenu();
    this.repositoryFactoryService.repository.logout(function() {
      this.router.navigateByUrl('/index');
    });
  }

  manageFileUploadEvent(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        this.modalService.dismissAll();
        this.manageFileUpload(reader.result, file.size, file.type);
      };
    }
  }

  async manageFileUpload(content, size, type) {
    let check = false;
    let errorMessage = '';
    if (content != null) {
      const maxSizeAllowed = 1048576;
      // Check size (max 1mb)
      if (size <= maxSizeAllowed) {
        check = true;
      } else {
        errorMessage = 'The maximum size allowed is 1Mb';
      }
      let extType = type.split('/')[1];
      if (check && this.optUploaded === 'audio') {
        check = false;
        // Check extension .mpeg
        if (extType === 'mpeg' || extType === 'mp3') {
          check = true;
          extType = 'mp3';
        } else {
          errorMessage = 'Only .mp3 files are allowed';
        }
      } else if (check && this.optUploaded === 'image') {
        check = false;
        // Check extension .jpeg o .png
        if (extType === 'jpg' || extType === 'jpeg' || extType === 'png') {
          check = true;
        } else {
          errorMessage = 'Only .jpg or .png files are allowed';
        }
      } else if (check && this.optUploaded === 'pdf') {
        check = false;
        // Check extension .pdf
        if (extType === 'pdf' || extType === 'plain' || extType === 'html' || extType === 'css'
          || extType === 'xml' || extType === 'javascript' || extType === 'x-javascript') {
          check = true;
          if (extType === 'plain') {
            extType = 'txt';
          } else if (extType === 'javascript' || extType === 'x-javascript') {
            extType = 'js';
          }
        } else {
          errorMessage = 'Only .pdf, .txt, .html, .css, .xml or .js files are allowed';
        }
      } else {
        check = false;
      }
      if (check) {
        const date = new Date();
        let md5Util = new Md5();
        const fileContentMD5hash = md5Util.appendStr(content).end();
        // File name pattern: chatIdentificator.milliseconds.fileContentHashMD5
        const generateKeyName = this.contact.urlPod.split('/')[2] + '.' + date.getTime() + '.' + fileContentMD5hash;
        md5Util = new Md5();
        // File name + ext
        const fileName = md5Util.appendStr(generateKeyName).end() + '.' + extType;
        const mssg = new Message(this.myContact, this.contact, date, fileName);
        mssg.isMedia = true;
        this.messageService.addMediaMessage(content, mssg, () => {
          if (!this.hashMessages.has(this.contact.urlPod)) {
            this.hashMessages.set(this.contact.urlPod, []);
          }
          this.hashMessages.get(this.contact.urlPod).push(mssg);
          this.message = '';
          $('.emoji-wysiwyg-editor').text('');
          this.notificationService.sendNewMessageNotification(mssg);
        });
      } else {
        this.appComponent.getContactsComponent().showResultMessage(errorMessage);
        alert(errorMessage);
        this.error = true;
      }
    } else {
      this.error = true;
      this.appComponent.getContactsComponent().showResultMessage('Uploading error');
      alert('Uploading error');
    }
  }

  async sendMultimedia(option: string) {
    if (option != null) {
      this.optUploaded = option;
      // Load window to select file
      this.modalService.open(this.editModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      }, err => {
      });
    }
  }

  async sendAudio() {
    this.optionUploaded = 'Select an audio file (mp3)';
    await this.sendMultimedia('audio');
  }

  async sendImage() {
    this.optionUploaded = 'Select an image file (jpg or png)';
    await this.sendMultimedia('image');
  }

  async sendPdf() {
    this.optionUploaded = 'Select a file (pdf, txt, html, css, xml or js)';
    await this.sendMultimedia('pdf');
  }

  async sendMessage(event: KeyboardEvent) {
    this.message = this.message.trim();
    if ((event == null || event.key === 'Enter') && this.message !== '') {
      const mess = new Message(this.myContact, this.contact, new Date(), this.message);
      this.messageService.addMessage(mess);
      if (!this.hashMessages.has(this.contact.urlPod)) {
        this.hashMessages.set(this.contact.urlPod, []);
      }
      this.hashMessages.get(this.contact.urlPod).push(mess);
      this.message = '';
      $('.emoji-wysiwyg-editor').text('');
      if (event != null) {
        event.preventDefault();
      }
      this.notificationService.sendNewMessageNotification(mess);
    }
  }

  deleteMessage(message: Message) {
    const wasMedia = message.isMedia;
    message.isMedia = false;
    message.isDeleted = true;
    for (let i = 0; i < this.messages.length; ++i) {
      if (this.messages[i].id === message.id) {
        this.messages[i].isDeleted = message.isDeleted;
        this.messages[i].isMedia = message.isMedia;
      }
    }
    this.notificationService.deleteMessageNotification(message);
    this.messageService.deleteMessage(this.contact, message, wasMedia);
  }

  showMessages = async () => {
    this.messages = this.hashMessages.get(this.contact.urlPod);
  }

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
            for (let i = 0; i < arrayAux.length; ++i) {
              const currentHash = this.hashMessages.get(this.contact.urlPod);
              let control = false;
              for (let e = 0; e < currentHash.length; ++e) {
                if (currentHash[e].id === arrayAux[i].id) {
                  control = true;
                  if (arrayAux[i].isDeleted) {
                    currentHash[e].isDeleted = true;
                    currentHash[e].isMedia = false;
                  }
                }
              }
              if (!control) {
                currentHash.push(arrayAux[i]);
              }
            }
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
                for (let i = 0; i < arrayAux.length; ++i) {
                  const currentHash = this.hashMessages.get(key);
                  let control = false;
                  for (let e = 0; e < currentHash.length; ++e) {
                      if (currentHash[e].id === arrayAux[i].id) {
                        control = true;
                        if (arrayAux[i].isDeleted) {
                          currentHash[e].isDeleted = true;
                          currentHash[e].isMedia = false;
                        }
                      }
                  }
                  if (!control) {
                    currentHash.push(arrayAux[i]);
                  }
                }
                this.hashMessages.get(key).sort((a, b) => {
                  return a.date.getTime() - b.date.getTime();
                });
              } else {
                // Here we would be able to check if someone who we don't have added as contact have written to us
                if (this.appComponent == null) {
                  this.contactService.getContacts().then(resCont => {
                    this.contactService.getUnknownContacts().then(resCont2 => {
                      resCont.push(...resCont2);
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
  }

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
    this.message = '';
    $('.emoji-wysiwyg-editor').text('');
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

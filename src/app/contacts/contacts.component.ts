/* tslint:disable:prefer-for-of */
import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Contact} from '../../model/contact';
import {ContactService} from '../../service/contact.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {MessagingComponent} from '../messaging/messaging.component';
import {reject} from 'q';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  allContacts: Contact[];
  contacts: Contact[];
  selectedContact: Contact;
  searchCall;
  search = '';
  messageLoadingOrEmpty;

  addMessageResult: string;
  contactID;
  contactNick;
  @ViewChild('contentModalEdit')
  private editModal: TemplateRef<any>;

  constructor(@Inject(MessagingComponent) private parent: MessagingComponent, public contactService: ContactService,
              private modalService: NgbModal) {
    this.contacts = [];
    this.allContacts = [];
    this.messageLoadingOrEmpty = true;
  }

  openAddContact(url) {
    document.getElementById('addContactButton').click();
    this.contactID = url + 'profile/card#me';
  }

  openModifyContact(contact: Contact) {
    this.contactID = contact.urlPod + 'profile/card#me';
    this.contactNick = contact.nickname;
    const previousNick = contact.nickname;
    this.modalService.open(this.editModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.editContact(previousNick);
    }, err => {
      this.contactNick = '';
      this.contactID = '';
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.addNewContact();
    }, (reason) => {
      this.addMessageResult = '';
    });
  }

  editContact(previousNick: string) {
    if (this.contactNick == null) {
      this.contactNick = '';
    }
    if (this.contactID != null && this.contactID.trim() !== '') {
      const result = {result: false, message: '', contID: this.contactID, nickContact: this.contactNick.trim()};
      if (result.nickContact !== previousNick) {
        if (result.nickContact === '') {
          result.nickContact = result.contID.split('/')[2];
        }
        result.result = true;
        result.message = 'Alias changed correctly';
        this.contactNick = '';
        this.contactID = '';
      }
      if (result.result) {
        const newContact = new Contact(result.contID, result.nickContact);
        const res = this.contactService.updateContact(newContact, () => {
          this.showResultMessage(result.message);
          this.ngOnInit();
          newContact.urlPod = newContact.urlPod.replace('profile/card#me', '');
          this.selectContact(newContact);
        });
      }
    }
  }

  addNewContact() {
    if (this.contactID == null) {
      this.contactID = '';
    }
    if (this.contactNick == null) {
      this.contactNick = '';
    }
    const result = this.checkContact();

    if (result.result) {
      const newContact = new Contact(result.contID, result.nickContact);
      const res = this.contactService.addContact(newContact);
      if (this.checkIsUnknown(newContact)) {
        const cont = new Contact(newContact.urlPod.replace('profile/card#me', ''), '');
        cont.isUnknown = true;
        this.contactService.deleteContact(cont, () => {this.auxFunctAdd(res, result); }, this.allContacts);
      } else {
        this.auxFunctAdd(res, result);
      }
    } else {
      this.showResultMessage(result.message);
    }
  }

  auxFunctAdd(res, result) {
    res.then(r => {
      if (r) {
        const wait = new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
          if (this.selectedContact != null && result.contID.replace('profile/card#me', '') === this.selectedContact.urlPod) {
            this.auxOnInit(result.contID.replace('profile/card#me', ''));
          } else {
            this.ngOnInit();
          }
        });
      } else {
        result.message = 'Unknown error has occurred';
      }
      this.resetAddContact();
      this.showResultMessage(result.message);
    });
  }

  checkIsUnknown(contact): boolean {
    for (let i = 0; i < this.allContacts.length; ++i) {
      if (this.allContacts[i].isUnknown && this.allContacts[i].urlPod + 'profile/card#me' === contact.urlPod) {
        return true;
      }
    }
    return false;
  }

  showResultMessage(message) {
    this.addMessageResult = message;
    const wait = new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
      this.addMessageResult = '';
    });
  }

  checkContact() {
    const arrayID = this.contactID.split('/');
    let showError = 'ERROR: ';
    let uri = '';
    let nick = '';
    if (arrayID.length === 5) {
      if (arrayID[0] !== 'https:' || arrayID[1] !== '' || arrayID[2].trim() === '' || arrayID[3] !== 'profile' || arrayID[4] !== 'card#me'){
        showError = 'ERROR: Invalid URL format';
      } else {
        uri = 'https://' + arrayID[2].trim() + '/profile/card#me';
        if (this.checkIfExistContact(uri)) {
          showError = 'ERROR: The contact already exists';
        } else {
          nick = this.contactNick.trim();
        }
      }
    } else {
      showError = 'ERROR: Invalid URL format';
    }

    if (showError.trim() === 'ERROR:') {
      return {result: true, message: 'Contact added correctly', contID: uri, nickContact: nick};
    } else {
      return {result: false, message: showError, contID: uri, nickContact: nick};
    }
  }

  checkIfExistContact(url) {
    if (this.allContacts != null) {
      for (let i = 0; i < this.allContacts.length; ++i) {
        if (!this.allContacts[i].isUnknown && (this.allContacts[i].urlPod + 'profile/card#me' === url
          || this.allContacts[i].urlPod + 'profile/card#me/' === url)) {
          return true;
        }
      }
    }
    return false;
  }

  resetAddContact() {
    this.contactNick = '';
    this.contactID = '';
  }

  auxOnInit(contactToSelectURL) {
    return new Promise(() => {
      this.contactService.getContacts().then(res => {
        this.contactService.getUnknownContacts().then(res2 => {
          res.push(... res2);
          this.messageLoadingOrEmpty = false;
          this.contactService.getContactsImages(res);
          this.allContacts = res;
          this.contacts = res;
          this.parent.setContactsComponente(this);
          if (contactToSelectURL != null) {
            for (let i = 0; i < this.allContacts.length; ++i) {
              if (this.allContacts[i].urlPod === contactToSelectURL) {
                this.selectContact(this.allContacts[i]);
                break;
              }
            }
          }
          return this.contacts;
        }, err => reject(err));
      }, err2 => reject(err2));
    });
  }

  ngOnInit() {
    return this.auxOnInit(null);
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.parent.selectContact(contact, this);
  }

  writeSearch() {
    if (this.searchCall != null) {
      clearTimeout(this.searchCall);
    }
    if (this.search !== '') {
      this.searchCall = setTimeout(this.makeSearch.bind(this), 500);
    }
  }

  makeSearch() {
    this.contacts = this.allContacts.filter(c => c.nickname.indexOf(this.search) >= 0 || c.urlPod.indexOf(this.search) >= 0);
  }
}

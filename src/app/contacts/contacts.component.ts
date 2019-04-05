import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {AppComponent} from '../app.component';
import {ContactService} from '../../service/contact.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(@Inject(AppComponent) private parent: AppComponent, public contactService: ContactService,
              private modalService: NgbModal) {
    this.contacts = [];
    this.messageLoadingOrEmpty = true;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.addNewContact();
    }, (reason) => {
      this.addMessageResult = '';
    });
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
      res.then(r => {
        if (r) {
          const wait = new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
            this.ngOnInit();
          });
        } else {
          result.message = 'Unknown error has occurred';
        }
        this.resetAddContact();
        this.showResultMessage(result.message);
      });
    } else {
      this.showResultMessage(result.message);
    }
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
        if (this.allContacts[i].urlPod + 'profile/card#me' === url || this.allContacts[i].urlPod + 'profile/card#me/' === url) {
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

  ngOnInit() {
    this.contactService.getContacts().then(res => {
      this.messageLoadingOrEmpty = false;
      this.contactService.getContactsImages(res);
      this.allContacts = res;
      this.contacts = res;
    });
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

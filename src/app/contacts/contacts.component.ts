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

  addMessageResult: string;
  contactID;

  constructor(@Inject(AppComponent) private parent: AppComponent, public contactService: ContactService,
              private modalService: NgbModal) {
    this.contacts = [];
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.addMessageResult = 'Contact added correctly';
      console.log(this.contactID);
      const wait = new Promise(resolve => setTimeout(resolve, 1500)).then(() => {
        this.addMessageResult = '';
      });
    }, (reason) => {
      this.addMessageResult = '';
    });
  }

  ngOnInit() {
    this.contactService.getContacts().then(res => {
      this.allContacts = res;
      this.contacts = res;
    });
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.parent.selectContact(contact);
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

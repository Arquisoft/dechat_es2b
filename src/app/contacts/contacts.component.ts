import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {AppComponent} from '../app.component';
import {ContactService} from '../../service/contact.service';

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

  constructor(@Inject(AppComponent) private parent: AppComponent, private contactService: ContactService) {
    this.contacts = [];
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

import {Component, Inject, OnInit} from '@angular/core';
import {Contact} from '../../model/contact';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(@Inject(AppComponent) private parent: AppComponent) {
    this.contacts = [new Contact('urlPod', 'Enol')];
  }

  ngOnInit() {
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.parent.selectContact(contact);
  }
}

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
  contacts: Contact[];
  selectedContact: Contact;

  constructor(@Inject(AppComponent) private parent: AppComponent, private contactService: ContactService) {
    this.contacts = [new Contact('urlPod', 'Enol')];
  }

  ngOnInit() {
    this.contactService.getContacts().then(res => {
      this.contacts = res;
    });
  }

  selectContact(contact: Contact) {
    this.selectedContact = contact;
    this.parent.selectContact(contact);
  }
}

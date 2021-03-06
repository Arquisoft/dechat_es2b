import {Component, OnInit, ViewChild} from '@angular/core';
import {MessagesComponent} from '../messages/messages.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {LoginService} from '../../service/login.service';
import {Contact} from '../../model/contact';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  contactsComponent: ContactsComponent;

  constructor(protected loginService: LoginService) {
  }

  getContactsComponent() {
    return this.contactsComponent;
  }

  setContactsComponente(contactsComponent): void {
    this.contactsComponent = contactsComponent;
    this.messages.setAppComponent(this);
  }

  selectContact(contact: Contact, contactsComponent): void {
    this.contactsComponent = contactsComponent;
    this.messages.selectConversation(contact, this);
  }

  ngOnInit(): void {
    this.loginService.myContact().then(contact => {
      if (contact == null) {
        window.location.href = '/index';
      }
    });
  }
}

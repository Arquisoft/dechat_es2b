import {Component, ViewChild} from '@angular/core';
import {MessagesComponent} from './messages/messages.component';
import {Contact} from '../model/contact';
import {LoginService} from '../service/login.service';
import {ContactsComponent} from './contacts/contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  contactsComponent: ContactsComponent;

  constructor(protected loginService: LoginService) {
    loginService.myContact();
  }

  getContactsComponent() {
    return this.contactsComponent;
  }

  selectContact(contact: Contact, contactsComponent): void {
    this.contactsComponent = contactsComponent;
    this.messages.selectConversation(contact, this);
  }
}

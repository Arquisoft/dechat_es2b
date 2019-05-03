import {Component, ViewChild} from '@angular/core';
import {MessagesComponent} from '../messages/messages.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {LoginService} from '../../service/login.service';
import {Contact} from '../../model/contact';
import {Router} from '@angular/router';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;
  contactsComponent: ContactsComponent;

  constructor(protected loginService: LoginService, private router: Router) {
    loginService.myContact().then(contact => {
      if (contact == null) {
        router.navigateByUrl('/index');
      }
    });
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
}

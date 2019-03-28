import {Component, ViewChild} from '@angular/core';
import {MessagesComponent} from './messages/messages.component';
import {Contact} from '../model/contact';
import {LoginService} from '../service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  constructor(protected loginService: LoginService) {
    loginService.myContact();
  }

  selectContact(contact: Contact): void {
    this.messages.selectConversation(contact);
  }
}

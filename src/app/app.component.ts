import {Component, ViewChild} from '@angular/core';
import {MessagesComponent} from './messages/messages.component';
import {Contact} from '../model/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MessagesComponent) messages: MessagesComponent;

  selectContact(contact: Contact): void {
    this.messages.selectConversation(contact);
  }
}

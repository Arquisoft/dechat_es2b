import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';

@Component({
  selector: 'app-mensajes',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  contact: Contact;

  constructor() { }

  ngOnInit() {
  }

  selectConversation(contact: Contact) {
    this.contact = contact;
  }
}

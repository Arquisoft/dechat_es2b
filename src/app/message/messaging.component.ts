import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../contact';
import {MessagesComponent} from '../messages/messages.component';

@Component({
    selector: 'app-mensajeria',
    templateUrl: './messaging.component.html',
    styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {
    @ViewChild(MessagesComponent) messages: MessagesComponent;

    constructor() {
    }

    ngOnInit() {
    }

    selectContact(contact: Contact): void {
        this.messages.selectConversation(contact);
    }
}

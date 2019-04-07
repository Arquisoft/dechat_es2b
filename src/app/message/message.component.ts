import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input('message') message: Message;
  @Input('received') received: boolean;

  @Input('target')
  set target(value: boolean) {
    if (value) {
      const element = document.getElementById('messagesBox');
      if (element != null) {
        const wait = new Promise(resolve => setTimeout(resolve, 50)).then(() => {
          element.scrollTop = element.scrollHeight;
        });
      }
    }
  }

  constructor() { }
}

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

  constructor() { }
}

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

  isImage(message: Message): boolean {
    if (message.isMedia) {
      const ext = message.text.split('.')[1];
      if (ext === 'jpeg' || ext === 'png') {
        return true;
      }
    }
    return false;
  }

  isRepresentable(message: Message): boolean {
    return this.isImage(message) || this.isAudio(message);
  }

  getExtension(message: Message): string {
    if (message.isMedia) {
      return message.text.split('.')[1];
    }
    return '';
  }

  isAudio(message: Message): boolean {
    if (message.isMedia) {
      const ext = message.text.split('.')[1];
      if (ext === 'mp3') {
        return true;
      }
    }
    return false;
  }

  constructor() { }
}

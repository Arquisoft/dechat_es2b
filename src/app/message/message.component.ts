import {Component, Inject, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Message} from '../../model/message';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Md5} from 'ts-md5';
import {MessageService} from '../../service/message.service';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input('message') message: Message;
  @Input('received') received: boolean;
  @ViewChild('contentModal')
  private editModal: TemplateRef<any>;

  showMessageOptions(event) {
    const tagHtmlTarget = event.target.tagName;
    if (!this.received && tagHtmlTarget !== 'A' && tagHtmlTarget !== 'IMG' && !this.message.isDeleted) {
      this.modalService.open(this.editModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.deleteMessage();
      }, err => {});
    }
  }

  deleteMessage() {
    this.appComponent.messages.deleteMessage(this.message);
  }

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

  constructor(private modalService: NgbModal, private messageService: MessageService, @Inject(AppComponent) private appComponent: AppComponent) { }
}

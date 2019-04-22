import {Injectable} from '@angular/core';
import {Message} from '../model/message';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {Contact} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(public repository: RepositoryFactoryService) {
  }

  addMessage(message: Message) {
    this.repository.repository.addMessage(message).then(() => {
    }, () => this.error(message));
  }

  deleteMessages(contact: Contact, messages: Message[]) {
    const arrayMessages = [];
    for (let i = 0; i < messages.length; ++i) {
      const message = messages[i];
      if (message.to.urlPod === contact.urlPod) {
        if (message.isMedia) {
          this.repository.repository.deleteFileAttached(message.text);
        }
        arrayMessages.push(message);
      }
    }
    this.getMessages(contact).then(res => {
      const arrayOwnMessages = [];
      for (let i = 0; i < res.length; ++i) {
        for (let e = 0; e < arrayMessages.length; ++e) {
          if (arrayMessages[e].id === res[i].id) {
            res[i].isMedia = false;
            res[i].isDeleted = true;
            break;
          }
        }
      }
      for (let i = 0; i < res.length; ++i) {
        if (res[i].to.urlPod === contact.urlPod) {
          arrayOwnMessages.push(res[i]);
        }
      }
      this.repository.repository.updateMessages(arrayOwnMessages, contact);
    });
  }

  async deleteMessage(contact: Contact, message: Message, wasMedia: boolean) {
    if (message.to.urlPod === contact.urlPod) {
      if (wasMedia) {
        this.repository.repository.deleteFileAttached(message.text);
      }
      this.getMessages(contact).then(res => {
        const arrayOwnMessages = [];
        for (let i = 0; i < res.length; ++i) {
          if (message.id === res[i].id) {
            res[i].isMedia = false;
            res[i].isDeleted = true;
          }
          if (res[i].to.urlPod === contact.urlPod) {
            arrayOwnMessages.push(res[i]);
          }
        }
        this.repository.repository.updateMessages(arrayOwnMessages, contact);
      });
    }
  }

  addMediaMessage(content, message: Message, callback) {
    this.repository.repository.addMediaMessage(content, message, callback).then(() => {
    }, () => this.error(message));
  }

  getMessages(contact: Contact): Promise<Message[]> {
    return this.repository.repository.getMessages(contact);
  }

  private error(message: Message) {
    alert('No se ha podido enviar tu mensaje para ' + message.to.nickname + '\nTexto:' + message.text);
  }
}

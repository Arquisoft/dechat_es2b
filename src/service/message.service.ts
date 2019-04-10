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

  getMessages(contact: Contact): Promise<Message[]> {
    return this.repository.repository.getMessages(contact);
  }

  private error(message: Message) {
    // alert('No se ha podido enviar tu mensaje para ' + message.to.nickname + '\nTexto:' + message.text);
  }
}

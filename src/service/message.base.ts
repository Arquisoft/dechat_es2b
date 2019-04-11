import {Message} from '../model/message';
import {Contact} from '../model/contact';
import {RepositoryFactoryBase} from '../repository/repository-factory.base';

export class MessageBase {
  constructor(public repository: RepositoryFactoryBase) {
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

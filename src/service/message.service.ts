import {Injectable} from '@angular/core';
import {Message} from '../model/message';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {Contact} from '../model/contact';
import {MessageBase} from './message.base';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends MessageBase {
  constructor(repository: RepositoryFactoryService) {
    super(repository);
  }
}

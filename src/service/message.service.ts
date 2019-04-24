import {Injectable} from '@angular/core';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {MessageBase} from './message.base';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends MessageBase {
  constructor(repository: RepositoryFactoryService) {
    super(repository);
  }
}

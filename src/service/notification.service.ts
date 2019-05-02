import { Injectable } from '@angular/core';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {Message} from '../model/message';
import {Notification} from '../model/notification';
import {NotificationBase} from './notification.base';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends NotificationBase {
  constructor(repository: RepositoryFactoryService) {
    super(repository);
  }
}

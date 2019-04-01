import { Injectable } from '@angular/core';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {Message} from '../model/message';
import {Notification} from '../model/notification';
import {Contact} from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public repository: RepositoryFactoryService) { }

  sendNewMessageNotification(message: Message) {
    const notification = new Notification(message.from.urlPod, message);
    this.repository.repository.addNotification(notification);
  }

  getCurrentChatNotifications(chatIdentificator: string) {
    return this.repository.repository.getNotifications(chatIdentificator);
  }

  getAllNotifications() {
    return this.repository.repository.getNotifications(null);
  }

  deleteChatNotifications(chatIdentificator: string) {
    this.repository.repository.deleteNotifications(chatIdentificator);
  }
}

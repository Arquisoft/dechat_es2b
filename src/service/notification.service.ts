import { Injectable } from '@angular/core';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {Message} from '../model/message';
import {News} from '../model/news';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(public repository: RepositoryFactoryService) { }

  sendNewMessageNotification(message: Message) {
    const notification = new News(message.from.urlPod, message);
    this.repository.repository.addNotification(notification);
  }

  getCurrentChatNotifications(chatIdentificator: string) {
    return this.repository.repository.getNotifications(chatIdentificator, false);
  }

  classifyNotificationsPerChat(notifications) {
    const hashMap = new Map<string, Message[]>();
    for (let i = 0; i < notifications.length; ++i) {
      const not = notifications[i];
      let arrayMessages = [];
      if (hashMap.has(not.chatIdentificator)) {
        arrayMessages = hashMap.get(not.chatIdentificator);
      }
      arrayMessages.push(not.message);
      hashMap.set(not.chatIdentificator, arrayMessages);
    }
    return hashMap;
  }

  getAllNotifications() {
    return this.repository.repository.getNotifications(null, false);
  }

  getAllNotificationsAndDelete() {
    return this.repository.repository.getNotifications(null, true);
  }

  deleteChatNotifications(chatIdentificator: string) {
    return this.repository.repository.deleteNotifications(chatIdentificator);
  }
}

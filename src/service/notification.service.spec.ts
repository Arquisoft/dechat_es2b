import {TestBed} from '@angular/core/testing';

import {NotificationService} from './notification.service';
import {MockRepository} from '../repository/impl/mock-repository';
import {Contact} from '../model/contact';
import {Notification} from '../model/notification';
import {Message} from '../model/message';

describe('NotificationService', () => {
  let mock;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.get(NotificationService);
    mock = new MockRepository();
    service.repository.config = mock;
    mock.contacts = [new Contact('http://prueba1.mock.up', 'Prueba1'),
      new Contact('http://prueba2.mock.up', 'Prueba2')];
    mock.notifications = [new Notification(mock.contacts[0].urlPod, new Message(mock.contacts[0], mock.contacts[1], new Date(), 'Hola')),
      new Notification(mock.contacts[1].urlPod, new Message(mock.contacts[1], mock.contacts[0], new Date(), 'Que tal'))];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should list notifications', () => {
    service.getAllNotifications().then(notifications => expect(notifications).toEqual(mock.notifications));
  });

  it('should get notifications for a single chat', async () => {
    service.getCurrentChatNotifications(mock.contacts[0]).then(notifications => expect(notifications).toContain(mock.notifications[0]));
  });

  it('should clasify notifications', async () => {
    service.getAllNotifications().then(notifications => expect(service.classifyNotificationsPerChat(notifications).length).toBe(2));
  });

  it('should delete notifications of a chat', async () => {
    service.deleteChatNotifications(mock.contacts[0].urlPod);
    service.getCurrentChatNotifications(mock.contacts[0]).then(notifications =>
      expect(notifications).not.toContain(mock.notifications[0]));
  });

  it ('should delete a single notificacion', () => {
    const notification = mock.notifications[0];
    service.deleteMessageNotification(notification.message);
    service.getAllNotifications().then(notifications => expect(notifications).not.toContain(notification));
  });
});

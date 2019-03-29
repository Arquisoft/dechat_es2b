import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';
import {MockRepository} from '../repository/impl/mock-repository';
import {Contact} from '../model/contact';
import {Message} from '../model/message';

describe('MessageService', () => {
  let service: MessageService;
  let contacts: Contact[];
  let messages: Message[];
  let repo: MockRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repo = new MockRepository();
    contacts = [new Contact('https://test1.mock.up/profile/card#me', 'Test1'), new Contact('https://test2.mock.up/profile/card#me', 'Test2')];
    repo.contacts = contacts;
    messages = [new Message(contacts[0], contacts[1], new Date(), 'First'), new Message(contacts[1], contacts[0], new Date(), 'Second')];
    repo.messages = messages;
    service = TestBed.get(MessageService);
    service.repository.config = repo;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new message', () => {
    service.getMessages(contacts[0]).then(oldMessages => {
      const message = new Message(contacts[0], contacts[1], new Date(), 'Test');
      service.addMessage(message);
      service.getMessages(contacts[0]).then(newMessages => {
        expect(newMessages.length).toBe(oldMessages.length + 1);
        expect(newMessages).toContain(message);
      });
    });
  });

  it('should list current messages', () => {
    service.getMessages(contacts[0]).then(currentMessages => {
      expect(currentMessages).toEqual(messages);
    });
  });
});

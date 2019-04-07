import {TestBed} from '@angular/core/testing';

import {ContactService} from './contact.service';
import {MockRepository} from '../repository/impl/mock-repository';
import {Contact} from '../model/contact';

describe('ContactService', () => {
  let service: ContactService;
  let contacts: Contact[];
  let repo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    repo = new MockRepository();
    contacts = [new Contact('https://test1.mock.up/profile/card#me', 'Test1')];
    repo.contacts = contacts;
    service = TestBed.get(ContactService);
    service.repository.config = repo;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new contacts', () => {
    service.getContacts().then(oldContacts => {
      const contact = new Contact('https://newtest.mock.up/profile/card#me', 'NewTest');
      service.addContact(contact);
      service.getContacts().then(newContacts => {
        expect(newContacts.length).toBe(oldContacts.length + 1);
        expect(newContacts).toContain(contact);
      });
    });
  });

  it('should read current contacts', () => {
    service.getContacts().then(currentContacts => {
      expect(currentContacts).toEqual(contacts);
    });
  });

  it('should check that errors don\'t cause inconsistency', () => {
    repo.nextAddContactError = true;
    const contact = new Contact('https://error.mock.up/profile/card#me', 'ErrorTest');
    service.addContact(contact);
    service.getContacts().then(currentContacts => {
      expect(currentContacts).not.toContain(contact);
      expect(currentContacts).toEqual(contacts);
    });
  });
});

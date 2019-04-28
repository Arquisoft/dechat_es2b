import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import {Mock} from 'protractor/built/driverProviders';
import {MockRepository} from '../repository/impl/mock-repository';
import {Contact} from '../model/contact';

describe('AccountService', () => {
  let service;
  let mock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(AccountService);
    mock = new MockRepository();
    service.repository.config = mock;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should get current contact', () => {
    const contact = new Contact('https://mock.up/', 'Prueba');
    mock.login(contact);
    service.getMyContact().then(myContact => expect(myContact).toEqual(contact));
  });

  it ('should log out with function', () => {
    service.logout(() => expect(service.logedIn).toBeFalsy());
  });
});

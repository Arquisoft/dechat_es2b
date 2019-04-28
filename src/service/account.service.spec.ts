import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';
import {Mock} from 'protractor/built/driverProviders';
import {MockRepository} from '../repository/impl/mock-repository';

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
});

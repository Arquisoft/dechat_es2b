import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
  it('should logout', () => {
    const service: LoginService = TestBed.get(LoginService);
    const wi = window.location;
    service.logout(() => false);
    expect(wi).toBe(window.location);
  });
});

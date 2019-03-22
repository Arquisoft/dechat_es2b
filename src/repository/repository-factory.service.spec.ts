import {TestBed} from '@angular/core/testing';

import {RepositoryFactoryService} from './repository-factory.service';

describe('RepositoryFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepositoryFactoryService = TestBed.get(RepositoryFactoryService);
    expect(service).toBeTruthy();
  });
});

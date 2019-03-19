import {Injectable} from '@angular/core';
import {Repository} from './repository';
import {PodRepository} from './impl/pod-repository';

@Injectable({
  providedIn: 'root'
})
export class RepositoryFactoryService {
  constructor() {
    this._repository = new PodRepository();
  }

  private _repository: Repository;

  get repository(): Repository {
    return this._repository;
  }
}

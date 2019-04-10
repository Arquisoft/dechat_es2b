import {Injectable} from '@angular/core';
import {Repository} from './repository';
import {PodRepository} from './impl/pod-repository';
import {ILoginService} from '../service/ILoginService';

@Injectable({
  providedIn: 'root'
})
export class RepositoryFactoryService {
  constructor(private login: ILoginService) {
    this._repository = new PodRepository(login);
  }
  private _repository: Repository;

  get repository(): Repository {
    return this._repository;
  }

  set config(value: Repository) {
    this._repository = value;
  }
}

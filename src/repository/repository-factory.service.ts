import {Injectable} from '@angular/core';
import {Repository} from './repository';
import {PodRepository} from './impl/pod-repository';
import {LoginService} from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryFactoryService {
  constructor(private login: LoginService) {
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

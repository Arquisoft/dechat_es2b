import {Repository} from './repository';
import {PodRepository} from './impl/pod-repository';
import {ILoginService} from '../service/ILoginService';

export class RepositoryFactoryBase {
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

import {Injectable} from '@angular/core';
import {RepositoryFactoryBase} from './repository-factory.base';
import {LoginService} from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RepositoryFactoryService extends RepositoryFactoryBase {
  constructor(login: LoginService) {
    super(login);
  }
}

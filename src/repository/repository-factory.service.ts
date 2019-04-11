import {Injectable} from '@angular/core';
import {PodRepository} from './impl/pod-repository';
import {ILoginService} from '../service/ILoginService';
import {RepositoryFactoryBase} from './repository-factory.base';

@Injectable({
  providedIn: 'root'
})
export class RepositoryFactoryService extends RepositoryFactoryBase {
  constructor(login: ILoginService) {
    super(login);
  }
}

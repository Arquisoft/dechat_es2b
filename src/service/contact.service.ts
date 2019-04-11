import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {RepositoryFactoryService} from '../repository/repository-factory.service';
import {ContactBase} from './contact.base';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends ContactBase {
  constructor(repository: RepositoryFactoryService) {
    super(repository);
  }
}

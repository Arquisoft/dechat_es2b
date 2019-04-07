import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import {RepositoryFactoryService} from '../repository/repository-factory.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private repository: RepositoryFactoryService) {
  }

  getMyContact(): Promise<Contact> {
    return this.repository.repository.getMyContact();
  }

  logout(action) {
    this.repository.repository.logout(action);
  }
}

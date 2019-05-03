import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import * as auth from 'solid-auth-client';
import {ILoginService} from './ILoginService';


@Injectable({
  providedIn: 'root'
})
export class LoginService implements ILoginService {
  session;

  constructor() {
    this.session = null;
  }

  myContact() {
    return new Promise<Contact>((resolve) => {
      if (this.session == null) {
        resolve(null);
      } else {
        resolve(new Contact(this.session.webId.replace('profile/card#me', ''), 'I'));
      }
    });
  }

  async login(provider, callback) {
    this.session = await auth.currentSession();
    if (!this.session) {
      await auth.login(provider);
    } else {
      callback();
    }
  }

  logout(action) {
    auth.logout().then(() => {
      this.session = null;
      if (action) {
        action();
      } else {
        window.location.reload();
      }
    });
  }
}

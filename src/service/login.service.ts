import {Injectable} from '@angular/core';
import {Contact} from '../model/contact';
import * as auth from 'solid-auth-client';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {
  }

  async myContact() {
    let session = await auth.currentSession();
    if (!session) {
      const popupUri = './assets/popup.html';
      session = await auth.popupLogin({popupUri});
    }
    alert('Logged in as ' + session.webId);
    return new Contact(session.webId, 'I');
  }

  logout(action) {
    auth.logout().then(() => {
      alert('Logout');
      action();
    });
  }
}

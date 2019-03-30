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
    return new Contact(session.webId.replace('profile/card#me', ''), 'I');
  }

  logout(action) {
    auth.logout().then(() => {
      if (action) {
        action();
      } else {
        window.location.reload();
      }
    });
  }
}

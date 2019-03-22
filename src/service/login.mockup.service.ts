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
    return new Contact('https://prueba1.mock.up/profile/card#me', 'I');
  }

  logout(action) {
    if (action != null) {
      action();
    }
  }
}

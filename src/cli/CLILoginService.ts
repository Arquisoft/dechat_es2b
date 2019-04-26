import {ILoginService} from '../service/ILoginService';

const auth = require('solid-auth-cli');

import {Contact} from '../model/contact';

export class CLILoginService implements ILoginService {
  private contact: Contact = null;

  async login(answers) {
    const session = await auth.login({
      idp: answers['identityProvider'],
      username: answers['username'],
      password: answers['password']});
    this.contact = new Contact(session.webId.replace('#me', '').replace('profile/card', ''), 'I');
  }

  async myContact(): Promise<Contact> {
    return this.contact;
  }

  logout(action) {
    auth.logout();
    this.contact = null;
    if (action) {
      action();
    }
  }
}

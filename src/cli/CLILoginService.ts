import {ILoginService} from '../service/ILoginService';

const SolidClient = require('../../node_modules/@solid/cli/src/SolidClient');
const IdentityManager = require('../../node_modules/@solid/cli/src/IdentityManager');

import {Contact} from '../model/contact';

export class CLILoginService implements ILoginService {
  private contact: Contact = null;

  async login(answers) {
    const {identityProvider, username, password} = answers;
    const identityManager = IdentityManager.fromJSON('{}');
    const client = new SolidClient({identityManager});

    const session = await client.login(identityProvider, {username, password});
    this.contact = new Contact(session.idClaims.sub.replace('#me', '').replace('profile/card', ''), 'I');
  }

  async myContact(): Promise<Contact> {
    return this.contact;
  }

  logout(action) {
    this.contact = null;
    if (action) {
      action();
    }
  }
}

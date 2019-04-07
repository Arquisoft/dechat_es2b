import {browser} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get('/');
  }
}

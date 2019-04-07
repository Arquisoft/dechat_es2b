import {by, element} from 'protractor';

export class MessagePage {
  static async writeMessage(message) {
    await element(by.tag('textarea')).sendKeys(message);
  }

  static async clickSend() {
    await element(by.class('send_btn')).click();
  }
}

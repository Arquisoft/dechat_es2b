import {by, element} from 'protractor';

export class ContactPage {
  static async clickContact(url) {
    await element(by.xpath('//*[contains(text(), \'' + url + '\')]')).click();
  }

  static async clickAdd() {
    await element(by.xpath('//button[contains(text(), \'Add new contact\')]')).click();
  }

  static async writeForm(webId, nick) {
    await element(by.name('contactID')).sendKeys(webId);
    await element(by.name('contactNick')).sendKeys(nick);
    await element(by.css('.modal-footer button')).click();
  }
}

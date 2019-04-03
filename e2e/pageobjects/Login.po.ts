import {AppPage} from './App.po';
import {browser, by, element} from 'protractor';

export class LoginPage extends AppPage {
  static async selectCustomProvider(url: string) {
    await element(by.buttonText('Log in with custom provider')).click();
    await element(by.css('input[type=url]')).sendKeys(url);
    await element(by.css('button[type=submit]')).click();
  }

  async login(url: string, password: string) {
    const handles = await browser.getAllWindowHandles();
    browser.switchTo().window(handles[handles.length - 1]);
    await LoginPage.selectCustomProvider(url);
    await element(by.name('username')).sendKeys(url);
    await element(by.name('password')).sendKeys(password);
    await element(by.id('login')).click();
    browser.switchTo().window(handles[0]);
  }
}

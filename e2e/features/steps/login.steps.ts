import {Given, Then, When} from 'cucumber';
import {by, element} from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import {LoginPage} from '../../pageobjects/Login.po';
import {AppPage} from '../../pageobjects/App.po';

const expect = chai.use(chaiAsPromised).expect;

const password = 'XXXX!';
const podUrl = 'https://dechates2b.inrupt.net/profile/card#me';

Given('The login form', () => {
  AppPage.navigateTo();
});

Given('The app with a login account', () => {
  AppPage.navigateTo().then(() => {
    LoginPage.login(podUrl, password);
  });
});

When('The user insert his pod\'s url and password', () => {
  LoginPage.login(podUrl, password);
});

When('The user click the logout button', () => {
  element(by.id('action_menu_btn')).click().then(() => {
    element(by.id('logout_btn')).click();
  });
});

Then('The session has been init', () => {
  element(by.css('#messagesBox p')).getText().then(text => {
    expect(text).to.have.string('Welcome to DeChat!');
  });
});

Then('The app log out the user', () => {
  element(by.css('.contacts li')).getText().then(text => {
    expect(text).to.have.string('Loading...');
  });
});

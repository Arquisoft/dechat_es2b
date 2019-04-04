import {Given, Then, When} from 'cucumber';
import {by, element} from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import {AppPage} from '../../pageobjects/App.po';
import {LoginPage} from '../../pageobjects/Login.po';
import {ContactPage} from '../../pageobjects/Contact.po';
import {MessagePage} from '../../pageobjects/Message.po';

const expect = chai.use(chaiAsPromised).expect;

const password = 'XXXX!';
const podUrl = 'https://dechates2b.inrupt.net/profile/card#me';

Given('The init app', () => {
  AppPage.navigateTo().then(() => {
    LoginPage.login(podUrl, password);
  });
});

Given('An open conversation', () => {
  AppPage.navigateTo().then(() => {
    LoginPage.login(podUrl, password).then(() => {
      ContactPage.clickContact('enolgargon.inrupt.net');
    });
  });
});

When('The user select a conversation', () => {
  ContactPage.clickContact('enolgargon.inrupt.net');
});

When('The user type a message', () => {
  MessagePage.writeMessage('Mi mensaje');
});

When('Click on send button', () => {
  MessagePage.clickSend();
});

Then('The user can read the messages', () => {
  expect(element(by.xpath('//*[contains(text(), \'enolgargon\')]'))).to.not.be.a('null');
});

Then('The user can see the message on the conversation side', () => {
  expect(element(by.xpath('//*[contains(text(), \'Mi mensaje\')]'))).to.not.be.a('null');
});

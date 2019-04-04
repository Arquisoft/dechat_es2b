import {Given, Then, When} from 'cucumber';
import {by, element} from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';

import {AppPage} from '../../pageobjects/App.po';
import {LoginPage} from '../../pageobjects/Login.po';
import {ContactPage} from '../../pageobjects/Contact.po';

const expect = chai.use(chaiAsPromised).expect;

const password = 'XXXX!';
const podUrl = 'https://dechates2b.inrupt.net/profile/card#me';

Given('The app init with a session', () => {
  AppPage.navigateTo().then(() => {
    LoginPage.login(podUrl, password);
  });
});

When('The user does nothing', () => {

});

When('The user click on the add contact button', () => {
  ContactPage.clickAdd();
});

When('Write the new contact\'s info', () => {
  ContactPage.writeForm('https://acg96.inrupt.net/profile/card#me', 'Andrés');
});

When('The user click on a contact', () => {
  ContactPage.clickContact('enolgargon.inrupt.net');
});

Then('The user can see its contacts', () => {
  expect(element(by.xpath('//*[contains(text(), \'enolgargon\')]'))).to.not.be.a('null');
});

Then('The user can chat with this contact', () => {
  expect(element(by.xpath('//*[contains(text(), \'acg96\')]'))).to.not.be.a('null');
});

Then('The user can see the conversation on the messages side', () => {
  element(by.css('.user_info span')).getText().then(text => {
    expect(text).contain('enolgargon');
  });
});

import {ContactBase} from '../service/contact.base';

const inquirer = require('inquirer');
const cTable = require('console.table');

import {Contact} from '../model/contact';
import {CLILoginService} from './CLILoginService';
import {RepositoryFactoryBase} from '../repository/repository-factory.base';
import {MessageBase} from '../service/message.base';

const loginService = new CLILoginService();
const repository = new RepositoryFactoryBase(loginService);
const contactService = new ContactBase(repository);
const messageService = new MessageBase(repository);

function printLogo() {
  console.log('\n' +
    '    ____       ________          __ \n' +
    '   / __ \\___  / ____/ /_  ____ _/ /_\n' +
    '  / / / / _ \\/ /   / __ \\/ __ `/ __/\n' +
    ' / /_/ /  __/ /___/ / / / /_/ / /_  \n' +
    '/_____/\\___/\\____/_/ /_/\\__,_/\\__/  \n' +
    '                                    \n');
}

async function showMenu() {
  if ((await loginService.myContact()) == null) {
    showNotLoggedMenu();
  } else {
    showLoggedMenu();
  }
}

function showNotLoggedMenu() {
  console.log('You are not logged in');
  inquirer.prompt([{
    name: 'main-menu-not-logged',
    type: 'list',
    message: 'What do you want to do?',
    choices: [
      'Log in',
      'Exit'
    ],
    default: 0
  }]).then(answers => {
    switch (answers['main-menu-not-logged']) {
      case 'Log in':
        login();
        break;
      case 'Exit':
        quit();
    }
  });
}

async function showLoggedMenu() {
  console.log('Logged as ' + (await loginService.myContact()).urlPod);
  inquirer.prompt([{
    name: 'main-menu',
    type: 'list',
    message: 'What do you want to do?',
    choices: [
      'List all my contacts',
      'Show messages of a contact',
      'Log out',
      'Exit'
    ],
    default: 0
  }]).then(answers => {
    switch (answers['main-menu']) {
      case 'List all my contacts':
        listContacts();
        break;
      case 'Show messages of a contact':
        chooseContact(showMessagesOf);
        break;
      case 'Log out':
        logout();
        showMenu();
        break;
      case 'Exit':
        quit();
    }
  });
}

function login() {
  inquirer.prompt([{
    name: 'username',
    type: 'input',
    message: 'What is your username?'
  }, {
    name: 'password',
    type: 'password',
    message: 'What is your password?'
  }, {
    name: 'identityProvider',
    type: 'input',
    message: 'What is your identify provider?',
    default: 'https://solid.community/'
  }]).then(async answers => {
    console.log('Logging in...');
    try {
      await loginService.login(answers);
    } catch (e) {
      console.log(e);
      console.error(`Something went wrong when logging in. Try again?`);
    } finally {
      showMenu();
    }
  });
}

function logout() {
  loginService.logout(null);
}

function listContacts() {
  contactService.getContacts().then(contacts => {
    const formatedContacts = [];
    contacts.forEach(contact => formatedContacts.push({
      'Url del pod': contact.urlPod,
      Nick: contact.nickname
    }));
    console.log(cTable.getTable(formatedContacts));
    showMenu();
  });
}

function chooseContact(callback) {
  contactService.getContacts().then(contacts => {
    const options = [];
    contacts.forEach(contact => options.push(`${contact.nickname}\t${contact.urlPod}`));
    inquirer.prompt([{
      name: 'contacts-menu',
      type: 'list',
      message: 'What do you want to do?',
      choices: options,
      default: 0
    }]).then(answers => {
      contacts.forEach(contact => {
        if (contact.urlPod === answers['contacts-menu'].split('\t')[1]) {
          callback(contact);
        }
      });
    });
  });
}

function showMessagesOf(contact: Contact) {
  messageService.getMessages(contact).then(messages => {
    let first = true;
    messages.forEach(message => {
      if (first) {
        first = false;
      } else {
        console.log('---------------------------------');
      }
      if (message.from.nickname === contact.urlPod) {
        console.log('From: I');
      } else {
        console.log('From: ' + contact.nickname);
      }
      console.log(message.date.toLocaleString());
      console.log(message.text);
    });
    showMenu();
  });
}

function quit() {
  logout();
  process.exit(0);
}

printLogo();
showMenu();

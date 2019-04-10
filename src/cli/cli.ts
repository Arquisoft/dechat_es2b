import {RepositoryFactoryService} from '../repository/repository-factory.service';

const inquirer = require('inquirer');

import {Contact} from '../model/contact';
import {ContactService} from '../service/contact.service';
import {MessageService} from '../service/message.service';
import {CLILoginService} from './CLILoginService';

const loginService = new CLILoginService();
const repository = new RepositoryFactoryService(loginService);
const messageService = new MessageService(repository);
const contactService = new ContactService(repository);

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
      'Show unread messages',
      'Log out',
      'Exit'
    ],
    default: 0
  }]).then(answers => {
    switch (answers['main-menu']) {
      case 'List all my contacts':
        listContacts();
        showMenu();
        break;
      case 'Show messages of a contact':
        showMessagesOf(chooseContact());
        showMenu();
        break;
      case 'Show unread messages':
        showUnreadMessages();
        showMenu();
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
    default: 'https://solid.community'
  }]).then(async answers => {
    console.log('Logging in...');
    try {
      await loginService.login(answers);
    } catch (e) {
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
}

function chooseContact(): Contact {
  return null;
}

function showMessagesOf(contact: Contact) {
}

function showUnreadMessages() {
}

function quit() {
  logout();
  process.exit(0);
}

printLogo();
showMenu();

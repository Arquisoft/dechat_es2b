"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const contact_base_1 = require("../service/contact.base");
const inquirer = require('inquirer');
const CLILoginService_1 = require("./CLILoginService");
const repository_factory_base_1 = require("../repository/repository-factory.base");
const loginService = new CLILoginService_1.CLILoginService();
const repository = new repository_factory_base_1.RepositoryFactoryBase(loginService);
const contactService = new contact_base_1.ContactBase(repository);
function printLogo() {
    console.log('\n' +
        '    ____       ________          __ \n' +
        '   / __ \\___  / ____/ /_  ____ _/ /_\n' +
        '  / / / / _ \\/ /   / __ \\/ __ `/ __/\n' +
        ' / /_/ /  __/ /___/ / / / /_/ / /_  \n' +
        '/_____/\\___/\\____/_/ /_/\\__,_/\\__/  \n' +
        '                                    \n');
}
function showMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield loginService.myContact()) == null) {
            showNotLoggedMenu();
        }
        else {
            showLoggedMenu();
        }
    });
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
function showLoggedMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Logged as ' + (yield loginService.myContact()).urlPod);
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
                    break;
                case 'Show messages of a contact':
                    chooseContact(showMessagesOf);
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
        }]).then((answers) => __awaiter(this, void 0, void 0, function* () {
        console.log('Logging in...');
        try {
            yield loginService.login(answers);
        }
        catch (e) {
            console.error(`Something went wrong when logging in. Try again?`);
        }
        finally {
            showMenu();
        }
    }));
}
function logout() {
    loginService.logout(null);
}
function listContacts() {
    contactService.getContacts().then(contacts => {
        console.log(contacts);
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
function showMessagesOf(contact) {
    console.log(contact);
    showMenu();
}
function showUnreadMessages() {
}
function quit() {
    logout();
    process.exit(0);
}
printLogo();
showMenu();
//# sourceMappingURL=cli.js.map
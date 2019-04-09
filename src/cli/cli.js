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
const inquirer = require('inquirer');
const readline = require('readline');
const auth = require('solid-auth-client');
const contact_1 = require("../model/contact");
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
    if (user == null) {
        showNotLoggedMenu();
    }
    else {
        showLoggedMenu();
    }
}
function showNotLoggedMenu() {
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
                break;
            case 'Show messages of a contact':
                break;
            case 'Show unread messages':
                break;
            case 'Log out':
                logout().then(() => showMenu());
                break;
            case 'Exit':
                quit();
        }
    });
}
function login() {
    auth.currentSession().then(session => {
        if (!session) {
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
                const { identityProvider, username, password } = answers;
                const identityManager = auth.IdentityManager.fromJSON('{}');
                const client = new auth.SolidClient({ identityManager });
                try {
                    session = yield client.login(identityProvider, { username, password });
                    user = new contact_1.Contact(session.idClaims.sub, 'I');
                    /*readline.clearLine(process.stdout, undefined);
                    readline.cursorTo(process.stdout, 0);*/
                }
                catch (e) {
                    console.error(`Something went wrong when logging in. Try again?`);
                }
                finally {
                    showMenu();
                }
            }));
        }
        else {
            user = new contact_1.Contact(session.webId, 'I');
        }
    });
}
function logout() {
    return __awaiter(this, void 0, void 0, function* () {
        yield auth.logout();
        user = null;
    });
}
function quit() {
    if (user != null) {
        logout().then(() => quit());
    }
    else {
        process.exit(0);
    }
}
let user = null;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
printLogo();
showMenu();
//# sourceMappingURL=cli.js.map
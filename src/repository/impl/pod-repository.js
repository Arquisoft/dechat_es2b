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
const serializer_1 = require("../util/serializer");
const pod_util_1 = require("../util/pod-util");
const q_1 = require("q");
const md5_1 = require("ts-md5/dist/md5");
class PodRepository {
    constructor(login) {
        this.login = login;
    }
    deleteContact(contact, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.login.myContact().then(cont => {
                const urlContacts = cont.urlPod + 'profile/card';
                return pod_util_1.PodUtil.readFile(urlContacts).then(res => {
                    if (res != null) {
                        return serializer_1.Serializer.serializeDeleteContact(contact, res).then(res2 => {
                            if (res2.trim() === '') {
                                throw new Error('error');
                            }
                            else {
                                pod_util_1.PodUtil.updateFile(urlContacts, res2).then(res3 => {
                                    callback();
                                }, err => {
                                });
                            }
                        });
                    }
                    else {
                        throw new Error('error');
                    }
                }, err => {
                    q_1.reject(err);
                });
            });
        });
    }
    addContact(contact) {
        return this.login.myContact().then(cont => {
            const urlContacts = cont.urlPod + 'profile/card';
            return pod_util_1.PodUtil.readFile(urlContacts).then(res => {
                if (res != null) {
                    return serializer_1.Serializer.serializeContact(contact, res).then(res2 => {
                        if (res2.trim() === '') {
                            throw new Error('error');
                        }
                        else {
                            pod_util_1.PodUtil.updateFile(urlContacts, res2);
                        }
                    });
                }
                else {
                    throw new Error('error');
                }
            }, err => {
                q_1.reject(err);
            });
        });
    }
    addMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlMessage = yield this.getChatUrl(message.to);
            const text = yield pod_util_1.PodUtil.readFile(urlMessage);
            const messages = text == null ? [] : serializer_1.Serializer.deserializeMessages(text);
            messages.push(message);
            pod_util_1.PodUtil.writeToFile(urlMessage, serializer_1.Serializer.serializeMessages(messages));
            pod_util_1.PodUtil.giveGrantsTo(urlMessage, message.to.urlPod);
        });
    }
    removeUnknownContact(contacts, contact, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const contactsUnknown = [];
            for (let i = 0; i < contacts.length; ++i) {
                if (contacts[i].isUnknown) {
                    contactsUnknown.push(contacts[i]);
                }
            }
            for (let i = 0; i < contactsUnknown.length; ++i) {
                if (contactsUnknown[i].urlPod === contact.urlPod) {
                    contactsUnknown.splice(i);
                    const myContact = yield this.login.myContact();
                    const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
                    pod_util_1.PodUtil.updateFile(pathUrl, serializer_1.Serializer.serializeUnknownContacts(contactsUnknown)).then(res3 => {
                        callback();
                    }, err => { });
                    break;
                }
            }
        });
    }
    addUnknownContact(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            const myContact = yield this.login.myContact();
            const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
            const text = yield pod_util_1.PodUtil.readFile(pathUrl);
            const contacts = text == null ? [] : serializer_1.Serializer.deserializeUnknownContacts(text);
            contact.isUnknown = true;
            contacts.push(contact);
            pod_util_1.PodUtil.writeToFile(pathUrl, serializer_1.Serializer.serializeUnknownContacts(contacts));
        });
    }
    getUnknownContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const myContact = yield this.login.myContact();
            const pathUrl = myContact.urlPod + 'dechat/' + 'unknown.Contacts.json';
            const text = yield pod_util_1.PodUtil.readFile(pathUrl);
            const contacts = text == null ? [] : serializer_1.Serializer.deserializeUnknownContacts(text);
            return contacts;
        });
    }
    getContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            const myContact = yield this.login.myContact();
            return serializer_1.Serializer.deserializeContacts((yield pod_util_1.PodUtil.readFile(myContact.urlPod + 'profile/card#me')) == null ? ''
                : yield pod_util_1.PodUtil.readFile(myContact.urlPod + 'profile/card#me'));
        });
    }
    getImageContacts(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < contact.length; ++i) {
                const imgUrl = serializer_1.Serializer.deserializeImageContacts(yield pod_util_1.PodUtil.readFile(contact[i].urlPod + 'profile/card#me'));
                imgUrl.then(res => {
                    if (res != null) {
                        contact[i].imageUrl = contact[i].urlPod + 'profile/' + res;
                    }
                });
            }
        });
    }
    getMessages(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            const myContact = yield this.login.myContact();
            const allMessages = [];
            const url = yield this.getChatUrl(contact);
            const messages = yield pod_util_1.PodUtil.readFile(url);
            allMessages.push(...yield serializer_1.Serializer.deserializeMessages(messages));
            const urlOther = contact.urlPod + 'dechat/' + myContact.urlPod.split('/')[2] + '.json';
            const messagesOther = yield pod_util_1.PodUtil.readFile(urlOther);
            allMessages.push(...yield serializer_1.Serializer.deserializeMessages(messagesOther));
            allMessages.sort((a, b) => {
                return a.date.getTime() - b.date.getTime();
            });
            return allMessages;
        });
    }
    getChatUrl(contact) {
        return __awaiter(this, void 0, void 0, function* () {
            const myContact = yield this.login.myContact();
            const pathUrl = myContact.urlPod + 'dechat/' + contact.urlPod.split('/')[2] + '.json';
            return pathUrl;
        });
    }
    getMyContact() {
        return this.login.myContact();
    }
    logout(action) {
        this.login.logout(action);
    }
    addNotification(notification) {
        return __awaiter(this, void 0, void 0, function* () {
            const md5Util = new md5_1.Md5();
            const hashIdentificatorFile = md5Util.appendStr(notification.chatIdentificator).end();
            const urlNotification = notification.message.to.urlPod + 'inbox/dechat.' + hashIdentificatorFile +
                '.' + notification.message.date.getTime() + '.json';
            pod_util_1.PodUtil.createFile(urlNotification, serializer_1.Serializer.serializeNotification(notification));
        });
    }
    getNotifications(chatIdentificator, deleteAfterRead) {
        return __awaiter(this, void 0, void 0, function* () {
            const me = yield this.login.myContact();
            const urlInbox = me.urlPod + 'inbox/';
            return pod_util_1.PodUtil.readFolder(urlInbox).then(res => {
                return serializer_1.Serializer.deserializeFolderNameFiles(res).then(listFileNames => {
                    const selectedFiles = [];
                    if (chatIdentificator != null && chatIdentificator.trim() !== '') {
                        const md5Util = new md5_1.Md5();
                        const hashIdentificatorFile = md5Util.appendStr(chatIdentificator).end();
                        for (let i = 0; i < listFileNames.length; ++i) {
                            const arrayFileName = listFileNames[i].split('.');
                            if (arrayFileName[1].toString() === hashIdentificatorFile) {
                                selectedFiles.push(listFileNames[i]);
                            }
                        }
                    }
                    else { // Get all notifications
                        selectedFiles.push(...listFileNames);
                    }
                    let control = 0;
                    const notifications = [];
                    const readFiles = new Promise((resolve, decline) => {
                        for (let i = 0; i < selectedFiles.length; ++i) {
                            pod_util_1.PodUtil.readFile(urlInbox + selectedFiles[i]).then((leido) => {
                                try {
                                    const not = serializer_1.Serializer.deserializeNotification(leido);
                                    if (not != null) {
                                        notifications.push(not);
                                        if (deleteAfterRead) {
                                            pod_util_1.PodUtil.removeFile(urlInbox + selectedFiles[i]).then((opt) => {
                                                ++control;
                                                if (control === selectedFiles.length) {
                                                    resolve('Finish');
                                                }
                                            });
                                        }
                                        else {
                                            ++control;
                                        }
                                    }
                                    else {
                                        ++control;
                                    }
                                    if (control === selectedFiles.length) {
                                        resolve('Finish');
                                    }
                                }
                                catch (_a) {
                                }
                            });
                        }
                        if (control === selectedFiles.length) {
                            resolve('Finish');
                        }
                    });
                    return readFiles.then(() => {
                        return notifications;
                    });
                });
            }, err => {
                const notifications = [];
                return notifications;
            });
        });
    }
    deleteNotifications(chatIdentificator) {
        return __awaiter(this, void 0, void 0, function* () {
            const me = yield this.login.myContact();
            const urlInbox = me.urlPod + 'inbox/';
            return pod_util_1.PodUtil.readFolder(urlInbox).then(res => {
                return serializer_1.Serializer.deserializeFolderNameFiles(res).then(listFileNames => {
                    const selectedFiles = [];
                    if (chatIdentificator != null && chatIdentificator.trim() !== '') {
                        const md5Util = new md5_1.Md5();
                        const hashIdentificatorFile = md5Util.appendStr(chatIdentificator).end();
                        for (let i = 0; i < listFileNames.length; ++i) {
                            const arrayFileName = listFileNames[i].split('.');
                            if (arrayFileName[1].toString() === hashIdentificatorFile) {
                                selectedFiles.push(listFileNames[i]);
                            }
                        }
                    }
                    else {
                        selectedFiles.push(...listFileNames);
                    }
                    const promFor = new Promise((resolve, decline) => {
                        let control = 0;
                        for (let i = 0; i < selectedFiles.length; ++i) {
                            pod_util_1.PodUtil.removeFile(urlInbox + selectedFiles[i]).then(tt => {
                                if (tt) {
                                    ++control;
                                    if (control === selectedFiles.length) {
                                        resolve('Finish');
                                    }
                                }
                            });
                        }
                        if (control === selectedFiles.length) {
                            resolve('Finish');
                        }
                    });
                    return promFor.then(() => {
                        return 1;
                    });
                });
            }, err => {
                return -1;
            });
        });
    }
}
exports.PodRepository = PodRepository;
//# sourceMappingURL=pod-repository.js.map
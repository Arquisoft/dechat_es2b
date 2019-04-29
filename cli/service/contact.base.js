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
class ContactBase {
    constructor(repository) {
        this.repository = repository;
        this.contacts = [];
    }
    addContact(contact) {
        return this.repository.repository.addContact(contact).then(() => 1, () => 0);
    }
    updateContact(contact, callback) {
        if (!contact.isUnknown) {
            return this.repository.repository.updateContact(contact, callback);
        }
    }
    addUnknownContact(contact) {
        this.repository.repository.addUnknownContact(contact);
    }
    deleteContact(contact, callback, contacts) {
        if (contact.isUnknown) {
            return this.repository.repository.removeUnknownContact(contacts, contact, callback);
        }
        else {
            return this.repository.repository.deleteContact(contact, callback);
        }
    }
    getContacts() {
        return this.repository.repository.getContacts();
    }
    getUnknownContacts() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.repository.getUnknownContacts();
        });
    }
    getContactsImages(contact) {
        this.repository.repository.getImageContacts(contact);
    }
}
exports.ContactBase = ContactBase;
//# sourceMappingURL=contact.base.js.map
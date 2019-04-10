"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let ContactService = class ContactService {
    constructor(repository) {
        this.repository = repository;
        this.contacts = [];
        repository.repository.getContacts().then(contacts => this.contacts = contacts);
    }
    addContact(contact) {
        return this.repository.repository.addContact(contact).then(() => 1, () => 0);
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
            const contacts = yield this.repository.repository.getUnknownContacts();
            return contacts;
        });
    }
    getContactsImages(contact) {
        this.repository.repository.getImageContacts(contact);
    }
};
ContactService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], ContactService);
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map
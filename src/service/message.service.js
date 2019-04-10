"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MessageService = class MessageService {
    constructor(repository) {
        this.repository = repository;
    }
    addMessage(message) {
        this.repository.repository.addMessage(message).then(() => {
        }, () => this.error(message));
    }
    getMessages(contact) {
        return this.repository.repository.getMessages(contact);
    }
    error(message) {
        // alert('No se ha podido enviar tu mensaje para ' + message.to.nickname + '\nTexto:' + message.text);
    }
};
MessageService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map
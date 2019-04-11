"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MessageBase {
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
}
exports.MessageBase = MessageBase;
//# sourceMappingURL=message.base.js.map
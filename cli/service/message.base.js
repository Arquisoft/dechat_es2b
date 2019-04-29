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
class MessageBase {
    constructor(repository) {
        this.repository = repository;
    }
    addMessage(message) {
        this.repository.repository.addMessage(message).then(() => {
        }, () => this.error(message));
    }
    deleteMessages(contact, messages) {
        const arrayMessages = [];
        for (let i = 0; i < messages.length; ++i) {
            const message = messages[i];
            if (message.to.urlPod === contact.urlPod) {
                if (message.isMedia) {
                    this.repository.repository.deleteFileAttached(message.text);
                }
                arrayMessages.push(message);
            }
        }
        this.getMessages(contact).then(res => {
            const arrayOwnMessages = [];
            for (let i = 0; i < res.length; ++i) {
                for (let e = 0; e < arrayMessages.length; ++e) {
                    if (arrayMessages[e].id === res[i].id) {
                        res[i].isMedia = false;
                        res[i].isDeleted = true;
                        break;
                    }
                }
            }
            for (let i = 0; i < res.length; ++i) {
                if (res[i].to.urlPod === contact.urlPod) {
                    arrayOwnMessages.push(res[i]);
                }
            }
            this.repository.repository.updateMessages(arrayOwnMessages, contact);
        });
    }
    deleteMessage(contact, message, wasMedia) {
        return __awaiter(this, void 0, void 0, function* () {
            if (message.to.urlPod === contact.urlPod) {
                if (wasMedia) {
                    this.repository.repository.deleteFileAttached(message.text);
                }
                this.getMessages(contact).then(res => {
                    const arrayOwnMessages = [];
                    for (let i = 0; i < res.length; ++i) {
                        if (message.id === res[i].id) {
                            res[i].isMedia = false;
                            res[i].isDeleted = true;
                        }
                        if (res[i].to.urlPod === contact.urlPod) {
                            arrayOwnMessages.push(res[i]);
                        }
                    }
                    this.repository.repository.updateMessages(arrayOwnMessages, contact);
                });
            }
        });
    }
    addMediaMessage(content, message, callback) {
        this.repository.repository.addMediaMessage(content, message, callback).then(() => {
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
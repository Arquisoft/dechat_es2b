"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Notification {
    constructor(chatIdentificator, message) {
        this._chatIdentificator = chatIdentificator;
        this._message = message;
    }
    get chatIdentificator() {
        return this._chatIdentificator;
    }
    set chatIdentificator(value) {
        this._chatIdentificator = value;
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map
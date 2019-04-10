"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(from, to, date, text) {
        this._from = from;
        this._to = to;
        this._date = date;
        this._text = text;
    }
    get from() {
        return this._from;
    }
    set from(value) {
        this._from = value;
    }
    getDate() {
        return this._date;
    }
    get to() {
        return this._to;
    }
    set to(value) {
        this._to = value;
    }
    get date() {
        return this._date;
    }
    set date(value) {
        this._date = value;
    }
    get text() {
        return this._text;
    }
    set text(value) {
        this._text = value;
    }
}
exports.Message = Message;
//# sourceMappingURL=message.js.map
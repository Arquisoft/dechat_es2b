"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_md5_1 = require("ts-md5");
class Message {
    constructor(from, to, date, text) {
        this._from = from;
        this._to = to;
        this._date = date;
        this._text = text;
        this._isMedia = false;
        this._isDeleted = false;
        let md5Util = new ts_md5_1.Md5();
        const messageContentMD5hash = md5Util.appendStr(text).end();
        // identificator of the message pattern: urlPodTo.milliseconds.hashMessageContent
        const dataToHash = to.urlPod + '.' + date.getTime() + '.' + messageContentMD5hash;
        md5Util = new ts_md5_1.Md5();
        this._id = md5Util.appendStr(dataToHash).end().toString();
    }
    get id() {
        return this._id;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(value) {
        this._isDeleted = value;
    }
    get isMedia() {
        return this._isMedia;
    }
    set isMedia(value) {
        this._isMedia = value;
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
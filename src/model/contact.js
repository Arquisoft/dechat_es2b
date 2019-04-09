"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Contact {
    constructor(urlPod, nickname) {
        this._urlPod = urlPod;
        this._nickname = nickname;
    }
    get isUnknown() {
        return this._isUnknown;
    }
    set isUnknown(value) {
        this._isUnknown = value;
    }
    get urlPod() {
        return this._urlPod;
    }
    set urlPod(value) {
        this._urlPod = value;
    }
    get nickname() {
        return this._nickname;
    }
    set nickname(value) {
        this._nickname = value;
    }
    get imageUrl() {
        if (this._imageUrl == null) {
            return 'assets/default_icon.png';
        }
        return this._imageUrl;
    }
    set imageUrl(value) {
        this._imageUrl = value;
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map
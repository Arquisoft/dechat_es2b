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
const SolidClient = require('../../node_modules/@solid/cli/src/SolidClient');
const IdentityManager = require('../../node_modules/@solid/cli/src/IdentityManager');
const contact_1 = require("../model/contact");
class CLILoginService {
    constructor() {
        this.contact = null;
    }
    login(answers) {
        return __awaiter(this, void 0, void 0, function* () {
            const { identityProvider, username, password } = answers;
            const identityManager = IdentityManager.fromJSON('{}');
            const client = new SolidClient({ identityManager });
            const session = yield client.login(identityProvider, { username, password });
            this.contact = new contact_1.Contact(session.idClaims.sub.replace('#me', '').replace('profile/card', ''), 'I');
        });
    }
    myContact() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.contact;
        });
    }
    logout(action) {
        this.contact = null;
        if (action) {
            action();
        }
    }
}
exports.CLILoginService = CLILoginService;
//# sourceMappingURL=CLILoginService.js.map
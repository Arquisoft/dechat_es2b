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
const contact_1 = require("../model/contact");
const auth = require("solid-auth-client");
let LoginService = class LoginService {
    constructor() {
    }
    myContact() {
        return __awaiter(this, void 0, void 0, function* () {
            let session = yield auth.currentSession();
            if (!session) {
                const popupUri = './assets/popup.html';
                session = yield auth.popupLogin({ popupUri });
            }
            return new contact_1.Contact(session.webId.replace('profile/card#me', ''), 'I');
        });
    }
    logout(action) {
        auth.logout().then(() => {
            if (action) {
                action();
            }
            else {
                window.location.reload();
            }
        });
    }
};
LoginService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const pod_repository_1 = require("./impl/pod-repository");
let RepositoryFactoryService = class RepositoryFactoryService {
    constructor(login) {
        this.login = login;
        this._repository = new pod_repository_1.PodRepository(login);
    }
    get repository() {
        return this._repository;
    }
    set config(value) {
        this._repository = value;
    }
};
RepositoryFactoryService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    })
], RepositoryFactoryService);
exports.RepositoryFactoryService = RepositoryFactoryService;
//# sourceMappingURL=repository-factory.service.js.map
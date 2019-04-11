"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pod_repository_1 = require("./impl/pod-repository");
class RepositoryFactoryBase {
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
}
exports.RepositoryFactoryBase = RepositoryFactoryBase;
//# sourceMappingURL=repository-factory.base.js.map
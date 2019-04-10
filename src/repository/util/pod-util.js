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
const solidfc = require("solid-file-client");
class PodUtil {
    static buildGrantText(urlPod, file) {
        return '@prefix : <#>. \n'
            + '@prefix c: </profile/card#>. \n'
            + '@prefix n0: <http://www.w3.org/ns/auth/acl#>. \n'
            + ':ControlReadWrite \n'
            + '\ta n0:Authorization; \n'
            + '\tn0:accessTo <' + file + '>; \n'
            + '\tn0:agent c:me; \n'
            + '\tn0:mode n0:Control, n0:Read, n0:Write. \n'
            + ':Read \n'
            + '\ta n0:Authorization; \n'
            + '\tn0:accessTo <' + file + '>; \n'
            + '\tn0:agent <' + urlPod + 'profile/card#me>; \n'
            + '\tn0:mode n0:Read.';
    }
}
PodUtil.writeToFile = (url, data) => __awaiter(this, void 0, void 0, function* () {
    yield PodUtil.readFile(url).then(() => {
        solidfc.remove(url).then(res => {
            PodUtil.createFile(url, data);
            return res;
        }, err => {
            return err;
        });
    }, () => {
        PodUtil.createFile(url, data);
    });
});
PodUtil.readFolder = (url) => __awaiter(this, void 0, void 0, function* () {
    return solidfc.readFile(url).then((res) => {
        return res;
    }, err => {
        return null;
    });
});
PodUtil.updateFile = (url, data) => __awaiter(this, void 0, void 0, function* () {
    return solidfc.updateFile(url, data);
});
PodUtil.readFile = (url) => __awaiter(this, void 0, void 0, function* () {
    return solidfc.readFile(url).then((res) => {
        return res;
    }, err => {
        return null;
    });
});
PodUtil.removeFile = (url) => __awaiter(this, void 0, void 0, function* () {
    return solidfc.deleteFile(url);
});
PodUtil.giveGrantsTo = (file, contact) => __awaiter(this, void 0, void 0, function* () {
    PodUtil.writeToFile(file + '.acl', PodUtil.buildGrantText(contact, file));
});
PodUtil.createFile = (url, data) => __awaiter(this, void 0, void 0, function* () {
    solidfc.createFile(url, data);
});
exports.PodUtil = PodUtil;
//# sourceMappingURL=pod-util.js.map
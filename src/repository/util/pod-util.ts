import * as solidfc from 'solid-file-client';

export class PodUtil {
  static writeToFile = async (url: string, data: string) => {
    await PodUtil.readFile(url).then(() => {
      solidfc.remove(url).then(res => {
        PodUtil.createFile(url, data);
        return res;
      }, err => {
        return err;
      });
    }, () => {
      PodUtil.createFile(url, data);
    });
  };

  static readFolder = async (url: string) => {
    return solidfc.readFile(url).then((res) => {
      return res;
    }, err => {
      return null;
    });
  }

  static updateFile = async (url: string, data: string) => {
    solidfc.updateFile(url, data);
  }

  static readFile = async (url: string) => {
    return solidfc.readFile(url).then((res) => {
      return res;
    }, err => {
      return null;
    });
  };

  static giveGrantsTo = async (file, contact) => {
    PodUtil.writeToFile(file + '.acl', PodUtil.buildGrantText(contact, file));
  };

  static createFile = async (url: string, data: string) => {
    solidfc.createFile(url, data);
  };

  private static buildGrantText(urlPod, file) {
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

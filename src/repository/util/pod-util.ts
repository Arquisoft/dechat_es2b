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

  static readFile = async (url: string) => {
    return solidfc.readFile(url).then((res) => {
      return res;
    }, err => {
      PodUtil.createFile(url, '');
      return null;
    });
  };

  private static createFile = async (url: string, data: string) => {
    solidfc.createFile(url, data);
  };
}

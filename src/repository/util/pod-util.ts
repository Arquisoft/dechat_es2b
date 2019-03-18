import * as solidfc from 'solid-file-client';

export class PodUtil {
  static writeToFile = async (url: string, data: string) => {
    PodUtil.readFile(url).then(() => {
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
    return solidfc.readFile(url);
  };

  private static createFile = async (url: string, data: string) => {
    solidfc.createFile(url, data);
  };
}

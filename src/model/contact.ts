export class Contact {
  constructor(urlPod: string, nickname: string) {
    this._urlPod = urlPod;
    this._nickname = nickname;
  }

  private _urlPod: string;

  get urlPod(): string {
    return this._urlPod;
  }

  set urlPod(value: string) {
    this._urlPod = value;
  }

  private _nickname: string;

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  private _imageUrl: string;

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}

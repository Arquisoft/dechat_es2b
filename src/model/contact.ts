export class Contact {
  constructor(urlPod: string, nickname: string) {
    this._urlPod = urlPod;
    this._nickname = nickname;
  }

  private _urlPod: string;

  private _isUnknown: boolean;

  get isUnknown(): boolean {
    return this._isUnknown;
  }

  set isUnknown(value: boolean) {
    this._isUnknown = value;
  }

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
    if (this._imageUrl == null) {
      return 'assets/default_icon.png';
    }
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}

import {Contact} from './contact';
import {Md5} from 'ts-md5';

export class Message {
  constructor(from: Contact, to: Contact, date: Date, text: string) {
    this._from = from;
    this._to = to;
    this._date = date;
    this._text = text;
    this._isMedia = false;
    let md5Util = new Md5();
    const messageContentMD5hash = md5Util.appendStr(text).end();
    // identificator of the message pattern: urlPodTo.milliseconds.hashMessageContent
    const dataToHash = to.urlPod + '.' + date.getTime() + '.' + messageContentMD5hash;
    md5Util = new Md5();
    this._id = md5Util.appendStr(dataToHash).end().toString();
  }

  private _id: string;

  get id(): string {
    return this._id;
  }

  private _isMedia: boolean;

  get isMedia(): boolean {
    return this._isMedia;
  }

  set isMedia(value: boolean) {
    this._isMedia = value;
  }

  private _from: Contact;

  get from(): Contact {
    return this._from;
  }

  set from(value: Contact) {
    this._from = value;
  }

  getDate() {
    return this._date;
  }

  private _to: Contact;

  get to(): Contact {
    return this._to;
  }

  set to(value: Contact) {
    this._to = value;
  }

  private _date: Date;

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  private _text: string;

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}

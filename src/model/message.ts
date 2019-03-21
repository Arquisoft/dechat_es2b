import {Contact} from './contact';

export class Message {
  constructor(from: Contact, to: Contact, date: Date, text: string) {
    this._from = from;
    this._to = to;
    this._date = date;
    this._text = text;
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

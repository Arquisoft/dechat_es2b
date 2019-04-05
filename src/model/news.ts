import {Message} from './message';

export class News {
  constructor(chatIdentificator: string, message: Message) {
    this._chatIdentificator = chatIdentificator;
    this._message = message;
  }

  private _chatIdentificator: string;

  get chatIdentificator(): string {
    return this._chatIdentificator;
  }

  set chatIdentificator(value: string) {
    this._chatIdentificator = value;
  }

  private _message: Message;

  get message(): Message {
    return this._message;
  }

  set message(value: Message) {
    this._message = value;
  }
}

export class Contact {
    constructor(url: string, nick: string) {
        this._url = url;
        this._nick = nick;
    }

    private _url: string;

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    private _nick: string;

    get nick(): string {
        return this._nick;
    }

    set nick(value: string) {
        this._nick = value;
    }
}

import { Contact } from './contact';
export declare class Message {
    constructor(from: Contact, to: Contact, date: Date, text: string);
    private _from;
    from: Contact;
    getDate(): Date;
    private _to;
    to: Contact;
    private _date;
    date: Date;
    private _text;
    text: string;
}

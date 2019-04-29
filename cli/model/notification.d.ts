import { Message } from './message';
export declare class Notification {
    constructor(chatIdentificator: string, message: Message);
    private _chatIdentificator;
    chatIdentificator: string;
    private _message;
    message: Message;
}

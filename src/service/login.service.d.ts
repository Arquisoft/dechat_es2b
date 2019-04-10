import { Contact } from '../model/contact';
import { ILoginService } from './ILoginService';
export declare class LoginService implements ILoginService {
    constructor();
    myContact(): Promise<Contact>;
    logout(action: any): void;
}

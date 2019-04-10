import { Contact } from '../model/contact';
export interface ILoginService {
    myContact(): Promise<Contact>;
    logout(action: any): any;
}

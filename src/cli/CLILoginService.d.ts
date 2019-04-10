import { ILoginService } from '../service/ILoginService';
import { Contact } from '../model/contact';
export declare class CLILoginService implements ILoginService {
    private contact;
    login(answers: any): Promise<void>;
    myContact(): Promise<Contact>;
    logout(action: any): void;
}

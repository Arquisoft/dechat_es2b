import { Repository } from './repository';
import { ILoginService } from '../service/ILoginService';
export declare class RepositoryFactoryService {
    private login;
    constructor(login: ILoginService);
    private _repository;
    readonly repository: Repository;
    config: Repository;
}

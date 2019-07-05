import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { getRepository, Repository } from 'typeorm';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
import { Msg } from '../msg/Msg';
import { UserRepository } from '../repository/UserRepository';
import { GenericRepository } from '../repository/GenericRepository';
import { GenericeService } from './GenericService';
let encriptutils = require('../components/encryputils')

const myClass = UserRepository

export class UserService extends GenericeService<User> {
    constructor() {
        super(new myClass())
    }

    login = async function (username, password): Promise<User> {
        return await this.genericRepository.login(username, password);
    }

    public async find(params: any = {}): Promise<User[]> {
        let users: User[] = await super.find(params)
        console.log(users)
        for (let i: number = 0; i < users.length; i++)
            delete users[i]["password"]
        return users
    }

    public async findById(id: number): Promise<User> {
        let user: User = await super.findById(id)
        delete user["password"]
        return user
    }

    public async hasPermissionsEntity(idUser: number, path: string, idHttp: number): Promise<boolean> {
        let u: User = await this.genericRepository.getRepository().createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .leftJoinAndSelect("profile.permissionsWS", "permissionsWS")
            .leftJoinAndSelect("permissionsWS.httpMethod", "httpMethod")
            .where("user.id = :idUser and  :path REGEXP  permissionsWS.servicePath and httpMethod.id = :idHttp", { idUser, path, idHttp })
            //            .where("user.id = :id and  :path LIKE '/users/__%' ", { id: 2, path: "/users/" })
            .getOne();
        return u != null
    }

    public async hasPermissionsReport(idUser: number, reportId: number): Promise<boolean> {
        let u: User = await this.genericRepository.getRepository().createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .leftJoinAndSelect("profile.reportAvailable", "report")
            .where("user.id = :idUser and  report.id=:reportId", { idUser, reportId })
            .getOne();
        console.log(u)
        return u != null
    }
}
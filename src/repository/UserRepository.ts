import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository, Not } from 'typeorm';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
import { Msg } from '../msg/Msg';
let encriptutils = require('../components/encryputils')
/************CONFIG CLASS**************** */
const myClass = User
/**************************************** */
export class UserRepository extends GenericRepository<User>{

    existeUsernameToInsert = async function (username): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "username": username} });
        return user != null
    }

    existeUsernameToUpdate = async function (username, id): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "username": username, "id": Not(id) } });
        return user != null
    }


    login = async function (username, password): Promise<User> {
        const user: User = await this.getRepository().findOne({ where: { "username": username, "password": encriptutils.encrypt(password),"activo":true  } });
        return user
    }

    public getRepository(): Repository<User> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

    public async save(newObj: User): Promise<User> {
        if (await this.existeUsernameToInsert(newObj.username))
            throw new ErrorBiactiva(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        newObj.profileId = 2
        return super.save(newObj)
    }

    public async updateById(data: any, id: number): Promise<any> {
        if (data.username != null && await this.existeUsernameToUpdate(data.username, id))
            throw new ErrorBiactiva(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        return super.updateById(data, id)
    }
}
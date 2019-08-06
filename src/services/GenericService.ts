import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { getRepository, Repository } from 'typeorm';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
import { Msg } from '../msg/Msg';
import { UserRepository } from '../repository/UserRepository';
import { GenericRepository } from '../repository/GenericRepository';
import { getFechaNotificacion } from '../components/fechaNotificacion';
let encriptutils = require('../components/encryputils')

export abstract class GenericeService<E> {
    protected genericRepository: GenericRepository<E>

    constructor(repository) {
        this.genericRepository = repository
    }

    public async find(params: any = {}): Promise<E[]> {
        return await this.genericRepository.find(params)
    }

    public async findById(id: number): Promise<E> {
        return await this.genericRepository.findById(id)
    }

    public async delete(id: number): Promise<E> {
        return await this.genericRepository.delete(id)
    }

    public async updateById(data, id) {
        return await this.genericRepository.updateById(data, id)
    }
    public async save(newObj: E) {
        return await this.genericRepository.save(newObj)
    }

    public async getNovedades():Promise<E[]>{
        const fechaNotificacionCambio=getFechaNotificacion()
        return this.genericRepository.getRepository().createQueryBuilder("e")
        .innerJoinAndSelect("e.municipalidad","municipalidad")
        .where("e.updateAt >:fechaNotificacionCambio",{fechaNotificacionCambio})
        .getMany()
    }
}
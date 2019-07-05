import { getConnectionDatabase } from "../components/dbHandler";
import { Repository } from "typeorm";
import { DBConection } from "../config/DBConection";
import { GenericRepository } from "./GenericRepository";


export abstract class GenericCacheRepository<E> extends GenericRepository<E>{

    private static listRegisters: any[] = null


    public async  getListRegisters(): Promise<any[]> {
        if (GenericCacheRepository.listRegisters == null) {
            console.log("Cacheando")
            GenericCacheRepository.listRegisters = await super.find()
        }
        console.log("Devolviendo info cacheada")
        return GenericCacheRepository.listRegisters
    }
    public async find(params: any = {}): Promise<E[]> {
        if ("select" in params || "q" in params || "order" in params || "limit" in params || "offset" in params)
            return await super.find(params)
        return this.getListRegisters()
    }

    public async save(newObj: E): Promise<E> {
        let newRegister = await super.save(newObj)
        const listRegisters = await this.getListRegisters()
        listRegisters.push(newRegister)
        return newRegister
    }

    public async updateById(data, id): Promise<any> {
        let result = await super.updateById(data, id)
        const listRegisters: any[] = await this.getListRegisters()
        for (let i = 0; i < listRegisters.length; i++) { //I didn't use streaming because i couldn't execute super.method()
            if (listRegisters[i]["id"] == id)
                listRegisters[i] = await super.findById(id)
        }
        return result
    }

    public async delete(id): Promise<any> {
        let result = await super.delete(id)
        const listRegisters: any[] = await this.getListRegisters()
        for (let i = 0; i < listRegisters.length; i++) { //I didn't use streaming because i couldn't execute super.method()
            if (listRegisters[i]["id"] == id)
                listRegisters.splice(i, 1);
        }
        return result
    }
}



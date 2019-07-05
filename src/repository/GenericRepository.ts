import { getConnectionDatabase } from "../components/dbHandler";
import { Repository } from "typeorm";
import { DBConection } from "../config/DBConection";


export abstract class GenericRepository<E>{


    public async find (params: any = {}): Promise<E[]> {
        let builder = await this.getRepository().createQueryBuilder(DBConection.ENTITY_REF_NAME)
        if ("select" in params) {
            let newSelect = []
            //*1 To use the method "select" correctly, we must to add the ENTITY_REF_NAME to each column. In others the cases, typeorm will return an empty array
            for (let i: number = 0; i < params.select.length; i++)
                newSelect[i] = DBConection.ENTITY_REF_NAME + "." + params.select[i]
            builder = await builder.select(newSelect)
        }
        if ("q" in params)
            builder = await builder.where(params.q)
        if ("order" in params)
            builder = await builder.orderBy(params.order)
        let limit = 20000
        if ("limit" in params)
            limit = params.limit
        builder = await builder.limit(limit)
        if ("offset" in params)
            builder = await builder.offset(params.offset)
        let objs = await builder.getMany()
        //If you didn't use select propertie, we just return the object that we had gotten from the database
        if (!("select" in params))
            return objs
        //in some cases, the object could have other attributes besides those that come from the selection of *1
        let newObjs = []
        for (let i: number = 0; i < objs.length; i++) {
            newObjs[i] = {}
            for (let j: number = 0; j < params.select.length; j++)
                newObjs[i][params.select[j]] = objs[i][params.select[j]]
        }
        return newObjs
    }

    public async findById(id: number): Promise<E> {
        return await this.getRepository().createQueryBuilder(DBConection.ENTITY_REF_NAME).where("id=" + id).getOne()
    }

    public async updateById(data, id): Promise<any> {
        delete data[id]
        return await getConnectionDatabase().createQueryBuilder()
            .update(this.getClass())
            .set(data)
            .where("id = :id", { "id": id })
            .execute()
    }
    public async save(newObj: E): Promise<E> {
        return await getConnectionDatabase().manager.save(newObj)
    }

    public async delete(id: number): Promise<any> {
        return await this.getRepository()
            .createQueryBuilder()
            .delete()
            .from(this.getClass())
            .where("id = :id", { id })
            .execute();
    }
    public abstract getRepository(): Repository<E>
    public abstract getClass()

}

import { GenericeService } from './GenericService'; 
import { MunicipalidadRepository } from '../repository/MunicipalidadRepository';
import { Municipalidad } from '../entity/Municipalidad';
import { ErrorBiactiva } from '../components/ErrorBiactiva';

/******************CONFIG CLASS************************** */
const myRepository = MunicipalidadRepository
/******************************************************** */

export class MunicipalidadService/**config */ extends GenericeService<Municipalidad/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async getUltimoRegistro(nombreAtributo:string,nombreTable:string,idMunicipalidad:number){
        let c:MunicipalidadRepository= new MunicipalidadRepository()
        let m: Municipalidad = await c.getRepository().createQueryBuilder("municipalidad")
        .leftJoinAndSelect("municipalidad."+nombreAtributo, nombreAtributo)
        .where("municipalidad.id = :municipalidadId and "+nombreAtributo+".createdAt=(select MAX(c2.createdAt) from "+nombreTable+" as c2)", { "municipalidadId":idMunicipalidad})
        .getOne()
        console.log(m)
        if(m!=undefined)
            return (m[nombreAtributo][0])
        throw new ErrorBiactiva("No existe el registro solicitado","No existe el registro solicitado",500)

    }
}
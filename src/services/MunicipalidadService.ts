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
        let m: Municipalidad = await this.genericRepository.getRepository().createQueryBuilder("municipalidad")
        .leftJoinAndSelect("municipalidad."+nombreAtributo, nombreAtributo,nombreAtributo+".createdAt=(select MAX(c2.createdAt) from "+nombreTable+" as c2)")
        .where("municipalidad.id = :municipalidadId", { "municipalidadId":idMunicipalidad})
        .getOne()
        console.log(m)
        if(m!=undefined)
            return (m[nombreAtributo][0])
        throw new ErrorBiactiva("No existe el registro solicitado","No existe el registro solicitado",500)
    }
    public async getMunicipalidadCompleta(municipalidadId):Promise<Municipalidad>{
        let where="municipalidad.id="+municipalidadId
        return await this.genericRepository.getRepository().createQueryBuilder("municipalidad")
        .leftJoinAndSelect("municipalidad.tazas","tazas","(tazas.id is null or tazas.createdAt=(select MAX(t.createdAt) from tazas as t) or tazas.id is null)")
        .leftJoinAndSelect("municipalidad.conflictividadesVecinal","conflictividadesVecinal","(conflictividadesVecinal.id is null or conflictividadesVecinal.createdAt=(select MAX(cv.createdAt) from conflictividad_vecinal as cv where cv.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.zonificaciones","zonificaciones","(zonificaciones.id is null or zonificaciones.createdAt=(select MAX(z.createdAt) from zonificacion as z where z.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.reglamentaciones","reglamentaciones","(reglamentaciones.id is null or reglamentaciones.createdAt=(select MAX(r.createdAt) from reglamentacion as r where r.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.contextosPoliticos","contextosPoliticos","(contextosPoliticos.id is null or contextosPoliticos.createdAt=(select MAX(cp.createdAt) from contexto_politico as cp where cp.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.enforcements","enforcements","(enforcements.id is null or enforcements.createdAt=(select MAX(e.createdAt) from enforcement as e where e.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.conveniosMunicipal","conveniosMunicipal","(conveniosMunicipal.id is null or conveniosMunicipal.createdAt=(select MAX(e.createdAt) from convenio_municipal as e where e.municipalidadId="+municipalidadId+"))")
        .leftJoinAndSelect("municipalidad.provincia","provincia")
        .where(where)
        .getOne()
    }

    public async setConDatos(idMunicipalidad:Number){
        this.updateById({"tieneDatos":true},idMunicipalidad)
    }
}
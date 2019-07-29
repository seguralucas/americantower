import { GenericeService } from './GenericService'; 
import { ZonificacionRepository } from '../repository/ZonificacionRepository';
import { Zonificacion } from '../entity/Zonificacion';
import { MunicipalidadService } from './MunicipalidadService';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ZonificacionRepository
/******************************************************** */

export class ZonificacionService/**config */ extends GenericeService<Zonificacion/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: Zonificacion): Promise<Zonificacion> {   
        const r= await super.save(newObj)
        const municipalidadService:MunicipalidadService= new MunicipalidadService()
        await municipalidadService.setConDatos(newObj.municipalidadId)
        return r
    }
}
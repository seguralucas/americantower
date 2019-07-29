import { GenericeService } from './GenericService'; 
import { TazasRepository } from '../repository/TazasRepository';
import { Tazas } from '../entity/Tazas';
import { MunicipalidadService } from './MunicipalidadService';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = TazasRepository
/******************************************************** */

export class TazasService/**config */ extends GenericeService<Tazas/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: Tazas): Promise<Tazas> {   
        const r= await super.save(newObj)
        const municipalidadService:MunicipalidadService= new MunicipalidadService()
        await municipalidadService.setConDatos(newObj.municipalidadId)
        return r
    }
}
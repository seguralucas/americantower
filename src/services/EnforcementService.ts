import { GenericeService } from './GenericService'; 
import { EnforcementRepository } from '../repository/EnforcementRepository';
import { Enforcement } from '../entity/Enforcement';
import { MunicipalidadService } from './MunicipalidadService';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = EnforcementRepository
/******************************************************** */

export class EnforcementService/**config */ extends GenericeService<Enforcement/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: Enforcement): Promise<Enforcement> {   
        const r= await super.save(newObj)
        const municipalidadService:MunicipalidadService= new MunicipalidadService()
        await municipalidadService.setConDatos(newObj.municipalidadId)
        return r
    }
}
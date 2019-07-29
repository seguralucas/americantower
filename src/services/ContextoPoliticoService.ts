import { GenericeService } from './GenericService'; 
import { ContextoPoliticoRepository } from '../repository/ContextoPoliticoRepository';
import { ContextoPolitico } from '../entity/ContextoPolitico';
import { MunicipalidadService } from './MunicipalidadService';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ContextoPoliticoRepository
/******************************************************** */

export class ContextoPoliticoService/**config */ extends GenericeService<ContextoPolitico/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: ContextoPolitico): Promise<ContextoPolitico> {   
        const r= await super.save(newObj)
        const municipalidadService:MunicipalidadService= new MunicipalidadService()
        await municipalidadService.setConDatos(newObj.municipalidadId)
        return r
    }

}
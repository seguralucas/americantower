import { GenericeService } from './GenericService'; 
import { ReglamentacionRepository } from '../repository/ReglamentacionRepository';
import { Reglamentacion } from '../entity/Reglamentacion';
import { MunicipalidadService } from './MunicipalidadService';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ReglamentacionRepository
/******************************************************** */

export class ReglamentacionService/**config */ extends GenericeService<Reglamentacion/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: Reglamentacion): Promise<Reglamentacion> {   
        const r= await super.save(newObj)
        const municipalidadService:MunicipalidadService= new MunicipalidadService()
        await municipalidadService.setConDatos(newObj.municipalidadId)
        return r
    }

}
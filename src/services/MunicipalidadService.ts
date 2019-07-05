import { GenericeService } from './GenericService'; 
import { MunicipalidadRepository } from '../repository/MunicipalidadRepository';
import { Municipalidad } from '../entity/Municipalidad';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = MunicipalidadRepository
/******************************************************** */

export class MunicipalidadService/**config */ extends GenericeService<Municipalidad/**config */> {
    constructor() {
        super(new myRepository())
    }
}
import { GenericeService } from './GenericService'; 
import { ProvinciaRepository } from '../repository/ProvinciaRepository';
import { Provincia } from '../entity/Provincia';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ProvinciaRepository
/******************************************************** */

export class ProvinciaService/**config */ extends GenericeService<Provincia/**config */> {
    constructor() {
        super(new myRepository())
    }
}
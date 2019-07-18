import { GenericeService } from './GenericService'; 
import { TazasRepository } from '../repository/TazasRepository';
import { Tazas } from '../entity/Tazas';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = TazasRepository
/******************************************************** */

export class TazasService/**config */ extends GenericeService<Tazas/**config */> {
    constructor() {
        super(new myRepository())
    }
}
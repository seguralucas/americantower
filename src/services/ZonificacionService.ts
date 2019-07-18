import { GenericeService } from './GenericService'; 
import { ZonificacionRepository } from '../repository/ZonificacionRepository';
import { Zonificacion } from '../entity/Zonificacion';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ZonificacionRepository
/******************************************************** */

export class ZonificacionService/**config */ extends GenericeService<Zonificacion/**config */> {
    constructor() {
        super(new myRepository())
    }
}
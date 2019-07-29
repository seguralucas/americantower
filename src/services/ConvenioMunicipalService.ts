import { GenericeService } from './GenericService'; 
import { ConvenioMunicipalRepository } from '../repository/ConvenioMunicipalRepository';
import { ConvenioMunicipal } from '../entity/ConvenioMunicipal';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ConvenioMunicipalRepository
/******************************************************** */

export class ConvenioMunicipalService/**config */ extends GenericeService<ConvenioMunicipal/**config */> {
    constructor() {
        super(new myRepository())
    }
}
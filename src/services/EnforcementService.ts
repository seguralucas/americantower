import { GenericeService } from './GenericService'; 
import { EnforcementRepository } from '../repository/EnforcementRepository';
import { Enforcement } from '../entity/Enforcement';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = EnforcementRepository
/******************************************************** */

export class EnforcementService/**config */ extends GenericeService<Enforcement/**config */> {
    constructor() {
        super(new myRepository())
    }
}
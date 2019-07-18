import { GenericeService } from './GenericService'; 
import { ReglamentacionRepository } from '../repository/ReglamentacionRepository';
import { Reglamentacion } from '../entity/Reglamentacion';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ReglamentacionRepository
/******************************************************** */

export class ReglamentacionService/**config */ extends GenericeService<Reglamentacion/**config */> {
    constructor() {
        super(new myRepository())
    }
}
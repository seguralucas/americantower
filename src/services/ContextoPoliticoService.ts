import { GenericeService } from './GenericService'; 
import { ContextoPoliticoRepository } from '../repository/ContextoPoliticoRepository';
import { ContextoPolitico } from '../entity/ContextoPolitico';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = ContextoPoliticoRepository
/******************************************************** */

export class ContextoPoliticoService/**config */ extends GenericeService<ContextoPolitico/**config */> {
    constructor() {
        super(new myRepository())
    }
}
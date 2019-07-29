import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { ContextoPolitico } from '../entity/ContextoPolitico';
import { MunicipalidadService } from '../services/MunicipalidadService';
/************CONFIG CLASS**************** */
const myClass = ContextoPolitico
/**************************************** */

export class ContextoPoliticoRepository/**config */ extends GenericRepository<ContextoPolitico/**config */>{
    public getRepository(): Repository<ContextoPolitico/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
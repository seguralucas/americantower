import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { Enforcement } from '../entity/Enforcement';
import { MunicipalidadService } from '../services/MunicipalidadService';
/************CONFIG CLASS**************** */
const myClass = Enforcement
/**************************************** */

export class EnforcementRepository/**config */ extends GenericRepository<Enforcement/**config */>{
    public getRepository(): Repository<Enforcement/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}
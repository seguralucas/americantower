import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { Reglamentacion } from '../entity/Reglamentacion';
import { MunicipalidadService } from '../services/MunicipalidadService';
/************CONFIG CLASS**************** */
const myClass = Reglamentacion
/**************************************** */

export class ReglamentacionRepository/**config */ extends GenericRepository<Reglamentacion/**config */>{
    public getRepository(): Repository<Reglamentacion/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
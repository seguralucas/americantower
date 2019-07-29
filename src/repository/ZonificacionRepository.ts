import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { Zonificacion } from '../entity/Zonificacion';
import { MunicipalidadService } from '../services/MunicipalidadService';
/************CONFIG CLASS**************** */
const myClass = Zonificacion
/**************************************** */

export class ZonificacionRepository/**config */ extends GenericRepository<Zonificacion/**config */>{
    public getRepository(): Repository<Zonificacion/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }

}
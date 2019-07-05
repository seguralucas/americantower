import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { Municipalidad } from '../entity/Municipalidad';
/************CONFIG CLASS**************** */
const myClass = Municipalidad
/**************************************** */

export class MunicipalidadRepository/**config */ extends GenericRepository<Municipalidad/**config */>{
    public getRepository(): Repository<Municipalidad/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
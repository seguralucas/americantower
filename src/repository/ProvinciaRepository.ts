import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { Provincia } from '../entity/Provincia';
/************CONFIG CLASS**************** */
const myClass = Provincia
/**************************************** */

export class ProvinciaRepository/**config */ extends GenericRepository<Provincia/**config */>{
    public getRepository(): Repository<Provincia/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
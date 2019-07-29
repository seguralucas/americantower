import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { ConvenioMunicipal } from '../entity/ConvenioMunicipal';
/************CONFIG CLASS**************** */
const myClass = ConvenioMunicipal
/**************************************** */

export class ConvenioMunicipalRepository/**config */ extends GenericRepository<ConvenioMunicipal/**config */>{
    public getRepository(): Repository<ConvenioMunicipal/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
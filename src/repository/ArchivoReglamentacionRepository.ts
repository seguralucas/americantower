import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { ArchivoReglamentacion } from '../entity/ArchivoReglamentacion';
/************CONFIG CLASS**************** */
const myClass = ArchivoReglamentacion
/**************************************** */

export class ArchivoReglamentacionRepository/**config */ extends GenericRepository<ArchivoReglamentacion/**config */>{
    public getRepository(): Repository<ArchivoReglamentacion/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
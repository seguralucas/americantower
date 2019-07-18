import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { ConflictividadVecinal } from '../entity/ConflictividadVecinal';
/************CONFIG CLASS**************** */
const myClass = ConflictividadVecinal
/**************************************** */

export class ConflictividadVecinalRepository/**config */ extends GenericRepository<ConflictividadVecinal/**config */>{
    public getRepository(): Repository<ConflictividadVecinal/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}
import { GenericeService } from './GenericService'; 
import { ArchivoReglamentacionRepository } from '../repository/ArchivoReglamentacionRepository';
import { ArchivoReglamentacion } from '../entity/ArchivoReglamentacion';
const fs = require('fs')
var path = require('path');

/******************CONFIG CLASS************************** */
const myRepository = ArchivoReglamentacionRepository
/******************************************************** */

export class ArchivoReglamentacionService/**config */ extends GenericeService<ArchivoReglamentacion/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async delete(id: number): Promise<ArchivoReglamentacion> {
        let archivoReglamentacion:ArchivoReglamentacion=await super.findById(id)
        let pathToFile=path.join(__dirname, "/../"+archivoReglamentacion.url)
        console.log("************")
        console.log(pathToFile)
        fs.unlinkSync(pathToFile)
        return await super.delete(id)
    }
}
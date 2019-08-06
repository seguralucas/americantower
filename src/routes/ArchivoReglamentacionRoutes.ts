import { addToGenericRoute } from './genericRoutes';
import { ArchivoReglamentacionService } from '../services/ArchivoReglamentacionService';
import { ArchivoReglamentacion } from '../entity/ArchivoReglamentacion';
import { responseError } from '../components/apiHandler';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
var express = require('express');
const multer = require('multer');
const path = require('path');
const PATH_UPLOAD_DIR=path.join(__dirname+('/../public/reglamentaciones'))
let upload = multer({ dest:  PATH_UPLOAD_DIR});
var router = express.Router();

/******************************************** */
const service = new ArchivoReglamentacionService()
const currentClass = ArchivoReglamentacion
/******************************************** */
router.post('/upload', upload.single('myFile'), async (req, res) => {
    try{
        if (req.file) {
            let filename = req.file.filename;
            let data=req.body
            console.log(data)
            let archivoReglamentacionService:ArchivoReglamentacionService= new ArchivoReglamentacionService()
            let archivoReglamentacion:ArchivoReglamentacion= new ArchivoReglamentacion()
            archivoReglamentacion.url="/public/reglamentaciones/"+filename
            archivoReglamentacion.municipalidadId=data.municipalidadId
            archivoReglamentacion.boletinOficial=data.boletinOficial
            archivoReglamentacion.descripcion=data.descripcion
            archivoReglamentacion.resolucion=data.resolucion
            await archivoReglamentacionService.save(archivoReglamentacion)
            res.send(archivoReglamentacion);
        } else 
            responseError(res,new ErrorBiactiva("No se envio el archivo","No se envio el archivo",500))
    }catch(e){
        responseError(res,e)
    }
});

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
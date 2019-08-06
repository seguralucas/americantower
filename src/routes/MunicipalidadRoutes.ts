import { addToGenericRoute } from './genericRoutes';
import { MunicipalidadService } from '../services/MunicipalidadService';
import { Municipalidad } from '../entity/Municipalidad';
import { responseError } from '../components/apiHandler';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
const fs = require('fs')
var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require('path');
const PATH_UPLOAD_DIR=path.join(__dirname+('/../public/fotosIntendentes'))
let upload = multer({ dest:  PATH_UPLOAD_DIR});
/******************************************** */
const service = new MunicipalidadService()
const currentClass = Municipalidad
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

let municipalidadService= new MunicipalidadService()

router.get('/:id/contexto-politico', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("contextosPoliticos","contexto_politico",req.params.id)
    res.send(data)  
    }
    catch(e){
        responseError(res,e)
    }
    return
})

router.get('/:id/reglamentacion', async (req, res, next) => {
    try{
        let data=await municipalidadService.getUltimoRegistro("reglamentaciones","reglamentacion",req.params.id)
        res.send(data)
    }    catch(e){
        responseError(res,e)
    }
    return
})

router.get('/:id/zonificacion', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("zonificaciones","zonificacion",req.params.id)
    res.send(data)
    }catch(e){
        responseError(res,e)
    }
})


router.get('/:id/enforcement', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("enforcements","enforcement",req.params.id)
    res.send(data)
    }catch(e){
        responseError(res,e)
    }
})

router.get('/:id/tazas', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("tazas","tazas",req.params.id)
    res.send(data)
    }catch(e){
        responseError(res,e)
    }
})

router.get('/:id/conflictividad-Vecinal', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("conflictividadesVecinal","conflictividad_vecinal",req.params.id)
    res.send(data)
    }catch(e){
        responseError(res,e)
    }
})


router.get('/:id/convenio-municipal', async (req, res, next) => {
    try{
    let data=await municipalidadService.getUltimoRegistro("conveniosMunicipal","convenio_municipal",req.params.id)
    res.send(data)
    }catch(e){
        responseError(res,e)
    }
})

router.post('/:id/fotoIntendente', upload.single('myFile'), async (req, res) => {
    try{
        if (req.file) {
            let filename = req.file.filename;
            let data=req.body
            console.log(data)
            let municipalidadService:MunicipalidadService= new MunicipalidadService()
            let municipalidad:Municipalidad=await municipalidadService.findById(req.params.id)
            if(municipalidad.urlFotoIntendente!= null ){
                try{
                    let pathToFile=path.join(__dirname, "/../"+municipalidad.urlFotoIntendente)
                    fs.unlinkSync(pathToFile)
                }catch(e){}
            }
            municipalidad.urlFotoIntendente="/public/fotosIntendentes/"+filename
            municipalidadService.updateById(municipalidad,municipalidad.id)
            res.send(municipalidad);
        } else 
            responseError(res,new ErrorBiactiva("No se envio el archivo","No se envio el archivo",500))
    }catch(e){
        responseError(res,e)
    }
});




module.exports = router;
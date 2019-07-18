import { addToGenericRoute } from './genericRoutes';
import { MunicipalidadService } from '../services/MunicipalidadService';
import { Municipalidad } from '../entity/Municipalidad';
import { responseError } from '../components/apiHandler';
var express = require('express');
var router = express.Router();

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





module.exports = router;
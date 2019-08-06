import { addToGenericRoute } from './genericRoutes';
import { MunicipalidadService } from '../services/MunicipalidadService';
import { Municipalidad } from '../entity/Municipalidad';
import { MunicipalidadRepository } from '../repository/MunicipalidadRepository';
import { responseError } from '../components/apiHandler';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
import { Msg } from '../msg/Msg';
import { ContextoPoliticoService } from '../services/ContextoPoliticoService';
import { ContextoPoliticoRepository } from '../repository/ContextoPoliticoRepository';
import { ContextoPolitico } from '../entity/ContextoPolitico';
import { ZonificacionService } from '../services/ZonificacionService';
import { TazasService } from '../services/TazasService';
import { ReglamentacionService } from '../services/ReglamentacionService';
import { EnforcementService } from '../services/EnforcementService';
import { ConvenioMunicipalService } from '../services/ConvenioMunicipalService';
import { ConflictividadVecinalService } from '../services/ConflictividadVecinalService';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new MunicipalidadService()
const currentClass = Municipalidad
/******************************************** */

router.post('/1', async (req, res, next) => {
    let c:MunicipalidadRepository= new MunicipalidadRepository()
    let mMunicipalidadService:MunicipalidadService= new MunicipalidadService()
    
    let where="1=1"
    if("idProvincia" in req.body)
        where+=" and provincia.id="+req.body.idProvincia
    if("nombre" in req.body)
        where+=" and (municipalidad.nombre like '%"+req.body.nombre+"%' or municipalidad.intendente like '%"+req.body.nombre+"%')"
    let limit="limit" in req.query?req.query.limit:20
    let offset="offset" in req.query?req.query.offset:0
    console.log(req.body)
    let m: Municipalidad[] = await c.getRepository().createQueryBuilder("municipalidad")
    .leftJoinAndSelect("municipalidad.provincia","provincia")
    .where(where)
    .take(limit)
    .skip(offset)
    .getMany()
    res.send(m)
    console.log(where)
    return
})

router.post('/2', async (req, res, next) => {
    let c:MunicipalidadService= new MunicipalidadService()
    if(!("municipalidadId" in req.body)){
        await responseError(res, new ErrorBiactiva(Msg.CAMPO_OBLIGATORIO("municipalidadId"),Msg.CAMPO_OBLIGATORIO("municipalidadId")))
        return
    }
    const municipalidadId=req.body.municipalidadId
    let data=await c.getMunicipalidadCompleta(municipalidadId)
    res.send(data)
    return
})

router.post('/3', async (req, res, next) => {
    const contextoPoliticoService:ContextoPoliticoService= new ContextoPoliticoService()
    const zonificacionService:ZonificacionService= new ZonificacionService()
    const tazasService:TazasService= new TazasService()
    const reglamentacionesService:ReglamentacionService= new ReglamentacionService()
    const enforcementsService:EnforcementService= new EnforcementService()
    const conveniosMunicipalService:ConvenioMunicipalService= new ConvenioMunicipalService()
    const conflictividadesVecinalService:ConflictividadVecinalService= new ConflictividadVecinalService()
    let data={}
    data["contextosPoliticos"]=await contextoPoliticoService.getNovedades()
    data["zonificaciones"]=await zonificacionService.getNovedades()
    data["tazas"]=await tazasService.getNovedades()
    data["reglamentaciones"]=await reglamentacionesService.getNovedades()
    data["enforcements"]=await enforcementsService.getNovedades()
    data["conveniosMunicipal"]=await conveniosMunicipalService.getNovedades()
    data["conflictividadesVecinal"]=await conflictividadesVecinalService.getNovedades()    
    res.send(data)

    return
})


module.exports = router;
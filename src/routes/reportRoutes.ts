import { addToGenericRoute } from './genericRoutes';
import { MunicipalidadService } from '../services/MunicipalidadService';
import { Municipalidad } from '../entity/Municipalidad';
import { MunicipalidadRepository } from '../repository/MunicipalidadRepository';
import { responseError } from '../components/apiHandler';
import { ErrorBiactiva } from '../components/ErrorBiactiva';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new MunicipalidadService()
const currentClass = Municipalidad
/******************************************** */

router.post('/1', async (req, res, next) => {
    let c:MunicipalidadRepository= new MunicipalidadRepository()
    let where="contextosPoliticos.createdAt=(select MAX(c2.createdAt) from contexto_politico as c2)"
    if("idProvincia" in req.body)
        where+=" and provincia.id="+req.body.idProvincia
    if("nombre" in req.body)
        where+=" and (municipalidad.nombre like '%"+req.body.nombre+"%' or contextosPoliticos.intendente like '%"+req.body.nombre+"%')"
    let limit="limit" in req.query?req.query.limit:20
    let offset="offset" in req.query?req.query.offset:0
    console.log(req.body)
    let m: Municipalidad[] = await c.getRepository().createQueryBuilder("municipalidad")
    .leftJoinAndSelect("municipalidad.contextosPoliticos", "contextosPoliticos")
    .leftJoinAndSelect("municipalidad.provincia","provincia")
    .where(where)
    .take(limit)
    .skip(offset)
    .getMany()
    res.send(m)
    console.log(where)
    return
})

module.exports = router;
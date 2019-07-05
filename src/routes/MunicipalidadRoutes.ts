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

router = addToGenericRoute(router, currentClass, service)



router.get('/:id/contexto-politico', async (req, res, next) => {
        let c:MunicipalidadRepository= new MunicipalidadRepository()
        let m: Municipalidad = await c.getRepository().createQueryBuilder("municipalidad")
        .leftJoinAndSelect("municipalidad.contextosPoliticos", "contextosPoliticos")
        .where("municipalidad.id = :municipalidadId and contextosPoliticos.createdAt=(select MAX(c2.createdAt) from contexto_politico as c2)", { "municipalidadId":req.params.id})
        .getOne()
        res.send(m.contextosPoliticos[0])
        return
    })


module.exports = router;
import { addToGenericRoute } from './genericRoutes';
import { ZonificacionService } from '../services/ZonificacionService';
import { Zonificacion } from '../entity/Zonificacion';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ZonificacionService()
const currentClass = Zonificacion
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
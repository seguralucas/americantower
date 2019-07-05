import { addToGenericRoute } from './genericRoutes';
import { ProvinciaService } from '../services/ProvinciaService';
import { Provincia } from '../entity/Provincia';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ProvinciaService()
const currentClass = Provincia
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
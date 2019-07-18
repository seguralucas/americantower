import { addToGenericRoute } from './genericRoutes';
import { TazasService } from '../services/TazasService';
import { Tazas } from '../entity/Tazas';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new TazasService()
const currentClass = Tazas
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
import { addToGenericRoute } from './genericRoutes';
import { ConvenioMunicipalService } from '../services/ConvenioMunicipalService';
import { ConvenioMunicipal } from '../entity/ConvenioMunicipal';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ConvenioMunicipalService()
const currentClass = ConvenioMunicipal
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
import { addToGenericRoute } from './genericRoutes';
import { ConflictividadVecinalService } from '../services/ConflictividadVecinalService';
import { ConflictividadVecinal } from '../entity/ConflictividadVecinal';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ConflictividadVecinalService()
const currentClass = ConflictividadVecinal
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
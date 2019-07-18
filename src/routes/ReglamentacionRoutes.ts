import { addToGenericRoute } from './genericRoutes';
import { ReglamentacionService } from '../services/ReglamentacionService';
import { Reglamentacion } from '../entity/Reglamentacion';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ReglamentacionService()
const currentClass = Reglamentacion
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
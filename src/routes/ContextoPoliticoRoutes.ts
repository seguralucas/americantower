import { addToGenericRoute } from './genericRoutes';
import { ContextoPoliticoService } from '../services/ContextoPoliticoService';
import { ContextoPolitico } from '../entity/ContextoPolitico';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new ContextoPoliticoService()
const currentClass = ContextoPolitico
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
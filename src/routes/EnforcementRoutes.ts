import { addToGenericRoute } from './genericRoutes';
import { EnforcementService } from '../services/EnforcementService';
import { Enforcement } from '../entity/Enforcement';
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new EnforcementService()
const currentClass = Enforcement
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;
import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { addToGenericRoute } from "./genericRoutes";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new UserService()
const currentClass = User
/******************************************** */

router = addToGenericRoute(router, currentClass, service)

module.exports = router;

import { User } from "../entity/User";
import { UserService } from "../services/UserService";
import { addToGenericRoute } from "./genericRoutes";
import { responseError } from "../components/apiHandler";
var express = require('express');
var router = express.Router();

/******************************************** */
const service = new UserService()
const currentClass = User
/******************************************** */

router.get('/me', async (req, res, next) => {
    let userService:UserService= new UserService()
    try{
    res.send(await userService.findById(res.locals.jwtPayload.u))  
    }
    catch(e){
        await responseError(res,e)
    }
    return
})

router = addToGenericRoute(router, currentClass, service)

module.exports = router;

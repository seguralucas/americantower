
import { User } from "../entity/User";
import { GenericRepository } from "../repository/GenericRepository";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../services/UserService";
var express = require('express');
var router = express.Router();
const apiHandler = require("../components/apiHandler")
const jwt = require("../components/jwt")

/******************************************** */
const service: UserService = new UserService()
/******************************************** */

router.post('/login', async (req, res, next) => {
  console.log(req.body)
  try {
    let user = await service.login(req.body.email, req.body.password)
    let accessToken = jwt.createAccessToken(user)
    res.send({ accessToken })
  } catch (e) {
    apiHandler.responseError(res, e, 500)
  }
});

router.post('/decodeToken', async (req, res, next) => {
  res.send(jwt.readAccessToken(req.body.accessToken))
});

module.exports = router;

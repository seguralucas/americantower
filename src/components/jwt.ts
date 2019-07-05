import { User } from "../entity/User";

var jwt = require('jsonwebtoken');
var fs = require('fs');
let path = require("path")
let keys = require("../config/keys")
//var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
//console.log(token)
// PAYLOAD


function createAccessToken(user: User) {
   let payload = { "u": user.id, "p": user.profileId }
   let token = jwt.sign(payload, keys.privateKey, keys.verifyOptions);
   return token
   //console.log("Token - " + token)
}

function createNewAccessToken(descriptedToken) {
   let payload = { "u": descriptedToken.u, "p": descriptedToken.p }
   let token = jwt.sign(payload, keys.privateKey, keys.verifyOptions);
   return token
   //console.log("Token - " + token)
}


function readAccessToken(token) {
   let legit = jwt.verify(token, keys.publicKey, keys.verifyOptions);
   return legit
}

module.exports = { createAccessToken, readAccessToken, createNewAccessToken }
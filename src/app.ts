import { createConnection } from "typeorm";
import { checkJwt } from "./middlewares/checkJwt";
import { test } from "./middlewares/test";
import { validatePermissions } from "./middlewares/validatePermission";
import { authorizationDecision } from "./middlewares/authorizationDecision";

const apiHandler = require("./components/apiHandler")

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const functions = require('firebase-functions')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const ENTITIES_BASE_URL = "entities"

var appOnPremise = express();

// view engine setup
appOnPremise.use(logger('dev'));
appOnPremise.use(express.json());
appOnPremise.use(express.urlencoded({ extended: false }));
appOnPremise.use(cookieParser());
appOnPremise.use(express.static(path.join(__dirname, 'public')));
appOnPremise.use(bodyParser.urlencoded({ extended: true }));
appOnPremise.use(bodyParser.json());

appOnPremise.use(express.static(path.join(__dirname, 'public')));

var users = require('./routes/usersRoutes');
var auth = require('./routes/authRoutes');

const genericEntitiesServicePath = [] //all services that need the same validation path
genericEntitiesServicePath.push({ "route": require('./routes/usersRoutes'), "serviceName": "users" })
genericEntitiesServicePath.push({ "route": require('./routes/MunicipalidadRoutes'), "serviceName": "municipalidades" })
genericEntitiesServicePath.push({ "route": require('./routes/EnforcementRoutes'), "serviceName": "enforcements" })
genericEntitiesServicePath.push({ "route": require('./routes/ProvinciaRoutes'), "serviceName": "provincias" })
genericEntitiesServicePath.push({ "route": require('./routes/ContextoPoliticoRoutes'), "serviceName": "contexto-politico" })
genericEntitiesServicePath.push({ "route": require('./routes/reportRoutes'), "serviceName": "reports" })

appOnPremise.use('/auth', auth);
for (let service of genericEntitiesServicePath) {
  appOnPremise.use('/' + ENTITIES_BASE_URL + '/' + service.serviceName, [ checkJwt, validatePermissions,authorizationDecision], service.route, [test]);
}

// catch 404 and forward to error handler
appOnPremise.use(function (req, res, next) {
  next(createError(404));
});

// error handler
appOnPremise.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

createConnection().then((c) => console.log("OK CONNECTION")).catch((e) => console.log(e))
let cloudFunction = null
try {
  cloudFunction = functions.https.onRequest(appOnPremise)
} catch (e) { }
export = { appOnPremise,cloudFunction }
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { DBConection } from "./config/DBConection";
import { Municipalidad } from "./entity/Municipalidad";
import { Enforcement } from "./entity/Enforcement";
import { Provincia } from "./entity/Provincia";
import { ContextoPolitico } from "./entity/ContextoPolitico";
import { MunicipalidadService } from "./services/MunicipalidadService";
import { MunicipalidadRepository } from "./repository/MunicipalidadRepository";
import { Context } from "mocha";
import { ContextoPoliticoRepository } from "./repository/ContextoPoliticoRepository";

createConnection().then(async connection => {

/*  const adminProfil = new Profile()
  adminProfil.id = 1
  adminProfil.name = "admin"
  await connection.manager.save(adminProfil);
  const userProfile = new Profile()
  userProfile.id = 2
  userProfile.name = "userProfile"
  await connection.manager.save(userProfile);
  const adminUser = new User();
  adminUser.id = 1
  adminUser.password = "123456";
  adminUser.name = "admin";
  adminUser.email = "admin@admin.com";
  adminUser.username = "admin";
  adminUser.dni = "123456";
  adminUser.lastName = "super";
  adminUser.profile = adminProfil;
  adminUser.activo = true;

  await connection.manager.save(adminUser);
  const standardUser = new User();
  standardUser.id = 2
  standardUser.password = "123456";
  standardUser.name = "lucas";
  standardUser.email = "lsegura@biactiva.com";
  standardUser.username = "lsegura";
  standardUser.dni = "prueba";
  standardUser.lastName = "segura";
  standardUser.activo = true;
  standardUser.profile = userProfile;

  await connection.manager.save(standardUser);

  let prov:Provincia= new Provincia()
  prov.nombre="Buenos Aires"
  prov.codigoProvincia="BA1"
  prov=await connection.manager.save(prov);
  let enforment:Enforcement= new Enforcement()
  enforment.descripcion="descripcion prueba"
  enforment.hay=true
  enforment=await connection.manager.save(enforment);

  let municipalidad:Municipalidad=new Municipalidad()
  municipalidad.codigoMunicipio="cod1"
  municipalidad.demografia="demografia"
  municipalidad.latitud=123.22
  municipalidad.longitud=22.33
  municipalidad.nombre="Merlo"
  municipalidad.telefono="1122334455"
  municipalidad.superficie="superficie"
  municipalidad.linkMapa="maps.google.com"
  municipalidad.provinciaId=prov.id
  municipalidad.enforcementId=enforment.id
  municipalidad.scoring=12.33
  await connection.manager.save(municipalidad);
  
  let contextoPolitico:ContextoPolitico= new ContextoPolitico()
  contextoPolitico.cantidadMandatoMaxima=4
  contextoPolitico.clasificacion=1
  contextoPolitico.intendente="Intendente aaa"
  contextoPolitico.K=55
  contextoPolitico.mayoria=false
  contextoPolitico.nMandato=33
  contextoPolitico.observacion="Observacion2"
  contextoPolitico.oficialistaNac=true
  contextoPolitico.oficialistaProv=true
  contextoPolitico.otrosPartidos=44
  contextoPolitico.PJ=22
  contextoPolitico.PRO=11
  contextoPolitico.puedeRelegir=true
  contextoPolitico.R=11
  contextoPolitico.relacionGobierno=0
  contextoPolitico.urlFotoIntendente="images.google.com/fotoIntendente"
  contextoPolitico.urlReglamentacion="reglamentacion.com/reglamentacion"
  contextoPolitico.municipalidadId=1
  contextoPolitico=await connection.manager.save(contextoPolitico)
*/
  let c:MunicipalidadRepository= new MunicipalidadRepository()
  let m: Municipalidad = await c.getRepository().createQueryBuilder("municipalidad")
  .leftJoinAndSelect("municipalidad.contextosPoliticos", "contextosPoliticos")
  .where("municipalidad.id = :municipalidadId and contextosPoliticos.createdAt=(select MAX(c2.createdAt) from contexto_politico as c2)", { "municipalidadId":1})
  .getOne()
}).catch(error => console.log(error));

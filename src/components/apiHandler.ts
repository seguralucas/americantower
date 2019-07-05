import { getConnectionDatabase } from './dbHandler';
import { GenericRepository } from '../repository/GenericRepository';
import { ErrorBiactiva } from './ErrorBiactiva';
import { GenericeService } from '../services/GenericService';
import { Msg } from '../msg/Msg';
import { FindResponse } from './FindResponse';

export const responseError = async function (res, e: Error) {
  if (e instanceof ErrorBiactiva)
    res.status(e.responseCode < 100 ? 500 : e.responseCode).send({ "responseCode": e.responseCode < 100 ? 500 : e.responseCode, "internalMessage": e.internalMessage, "userMessage": e.userMessage })
  else
    res.status(500).send({ "responseCode": 500, "internalMessage": e.toString(), "userMessage": e.toString() })
  res.locals.hasError = true
}

export const getHandlerGenericEntity = async function (req, res, classEntity, service: GenericeService<any>) {
  try {
    console.log(req.query)
    if ("select" in req.query)
      try { req.query.select = JSON.parse(req.query.select) } catch (e) { throw Msg.MALFORMED_JSON_SELECT };
    if ("order" in req.query)
      try { req.query.order = JSON.parse(req.query.order) } catch (e) { throw Msg.MALFORMED_JSON_ORDER };
    const objs = await service.find(req.query)
    let findResponse = new FindResponse(objs)
    res.locals.responseData = findResponse
    res.send(findResponse)
  } catch (e) {
    await responseError(res, new ErrorBiactiva(e.toString(), e.toString(), 500))
  }
}

export const getByIdHandlerGenericEntity = async function (req, res, classEntity, service: GenericeService<any>) {
  try {
    if (!("id" in req.params))
      throw new ErrorBiactiva(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 400)
    const obj = await service.findById(req.params.id)
    if (obj == null)
      throw new ErrorBiactiva(Msg.REGISTER_NOT_FOUND, Msg.REGISTER_NOT_FOUND, 400)
    res.locals.responseData = obj
    res.send(obj)
  } catch (e) {
    await responseError(res, new ErrorBiactiva(e.toString(), e.toString(), 500))
  }
}

export const deleteHandlerGenericEntity = async function (req, res, classEntity, service: GenericeService<any>) {
  try {
    if (!("id" in req.params))
      throw new ErrorBiactiva(Msg.ID_MANDATORY, Msg.ID_MANDATORY, 400)
    const obj = await service.delete(req.params.id)
    if (obj == null)
      throw new ErrorBiactiva(Msg.REGISTER_NOT_FOUND, Msg.REGISTER_NOT_FOUND, 400)
    res.locals.responseData = obj
    res.status(204).send(obj)
  } catch (e) {
    await responseError(res, new ErrorBiactiva(e.toString(), e.toString(), 500))
  }
}



export const postHandlerGenericEntity = async function (req, res, classEntity, service: GenericeService<any>) {
  let newObj = new classEntity()
  Object.assign(newObj, req.body)
  try {
    await service.save(newObj)
    res.send(newObj);
  } catch (e) {
    await responseError(res, e)
  }
}

/**
 * This function update generically a register of a class by its id
 * 
 * @param req param that has the request information
 * @param res param that will be set with the response information
 * @param classEntity Class of the entity to update
 */
export const updateHandlerGenericEntity = async function (req, res, classEntity, repository: GenericeService<any>) {
  delete req.body["id"] //The client can't change the id associated to the register
  repository.updateById(req.body, req.params.id).then(
    (objUpdated) => { res.send(objUpdated) }
  ).catch(async (e) => {
    await responseError(res, e)
  })
}



import { postHandlerGenericEntity, getHandlerGenericEntity, getByIdHandlerGenericEntity, updateHandlerGenericEntity, deleteHandlerGenericEntity } from "../components/apiHandler";
import { GenericeService } from "../services/GenericService";

export const addToGenericRoute = function (router, currentClass: any, service: GenericeService<any>) {
        router.post('/', async (req, res, next) => {
            await postHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
        router.get('/', async (req, res, next) => {
            await getHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
        router.get('/:id', async (req, res, next) => {
            await getByIdHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
        router.patch('/:id', async (req, res, next) => {
            await updateHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
        router.delete('/:id', async (req, res, next) => {
            await deleteHandlerGenericEntity(req, res, currentClass, service)
            next()
        });
    return router
}

import { Request, Response, NextFunction } from "express";
import { normalizeUrl } from "../components/utils";
import { Profile } from "../entity/Profile";
import { permisos } from "../config/permisions";
const apiHandler = require("../components/apiHandler")

export const validatePermissions = async (req: Request, res: Response, next: NextFunction) => {
    let newUrl = normalizeUrl(req.originalUrl)
    if(res.locals.jwtPayload.p==Profile.ID_ADMIN)
        res.locals.hasPermission = true
    if (req.method == "POST" && newUrl=="/entities/users")
        res.locals.hasPermission = true
    let permisosPerfil=permisos[res.locals.jwtPayload.p]
    if(permisosPerfil)
        console.log(permisosPerfil)
    //Get the jwt token from the head
    console.log(res.locals.jwtPayload.u, res.locals.jwtPayload.p, newUrl, req.method)      
    next()
};
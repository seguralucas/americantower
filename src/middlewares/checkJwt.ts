import { Request, Response, NextFunction } from "express";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Msg } from "../msg/msg";
const jwt = require("../components/jwt")
const apiHandler = require("../components/apiHandler")

export const checkJwt = async (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.publicService) {
        next()
        return
    }
    //Get the jwt token from the head
    const authHead: string = req.headers.authorization
    if (!authHead) {
        await apiHandler.responseError(res, new ErrorBiactiva(Msg.NOT_AUTHENTICATION_HEADER, Msg.NOT_AUTHENTICATION_HEADER, 403))
        return
    }
    let splitAuthHead: string[] = authHead.split(" ");
    if (splitAuthHead[0] != "Bearer") {
        await apiHandler.responseError(res, new ErrorBiactiva(Msg.AUTHENTICATION_METHOD_NOT_ALLOW, Msg.AUTHENTICATION_METHOD_NOT_ALLOW, 403))
        return
    }
    try {
        const jwtPayload = jwt.readAccessToken(splitAuthHead[1])
        const newToken = jwt.createNewAccessToken(jwtPayload)
        res.setHeader("accessToken", newToken);
        res.locals.jwtPayload = jwtPayload;
        next();
    } catch (e) {
        await apiHandler.responseError(res, e)
    }
    return
};
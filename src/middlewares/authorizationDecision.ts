import { Request, Response, NextFunction } from "express";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Msg } from "../msg/Msg";
const apiHandler = require("../components/apiHandler")

export const authorizationDecision = async (req: Request, res: Response, next: NextFunction) => {
    if (res.locals.publicService != true && !res.locals.hasPermission) {
        if (!("errorBiactiva" in res.locals))
            apiHandler.responseError(res, new ErrorBiactiva(Msg.UNAHUTORIZED, Msg.UNAHUTORIZED, 401))
        else
            apiHandler.responseError(res, res.locals.errorVDF)
        return;
    }
    next()
};

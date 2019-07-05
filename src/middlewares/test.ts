import { Request, Response, NextFunction } from "express";
import { ErrorBiactiva } from "../components/ErrorBiactiva";
import { Msg } from "../msg/msg";
const jwt = require("../components/jwt")
const apiHandler = require("../components/apiHandler")

export const test = async (req: Request, res: Response, next: NextFunction) => {
    console.log("ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(res.locals.responseData)
};
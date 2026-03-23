import BusinessError from "./errors/BusinessError.js";
import EntityNotFound from "./errors/EntityNotFound.js";
import { ApiResponse, type HttpStatusCode,HttpStatus } from "../utils/api.response.js";
import type { NextFunction, Request, Response } from "express";
import ValidationError from "./errors/ValidationError.js";


export function errorHandler(err:Error,req:Request,res:Response,next:NextFunction){
    switch(true){
        case err instanceof BusinessError : 
            return BusinessErrorHandler(res,err.statusCode,err.message);
        case err instanceof EntityNotFound :
            return EntityNotFoundHandler(res,err.statusCode,err.message);
        case err instanceof ValidationError:
            return ValidationErrorHandler(res,err.statusCode,err.message);
        default:
            console.error(err);
            return DefaultErrorHandler(res);
    }
}

function DefaultErrorHandler (res:Response) {
    return res
        .status(HttpStatus.INTERNAL_ERROR)
        .send(
            ApiResponse.error(HttpStatus.INTERNAL_ERROR,"Internal server error")
        );
}

function BusinessErrorHandler (res:Response,status:HttpStatusCode,message:string) {
    return res
        .status(status)
        .send(ApiResponse.error(status,message));
}


function EntityNotFoundHandler (res:Response,status:HttpStatusCode,message:string) {
    return res
        .status(status)
        .send(ApiResponse.error(status,message));
}

function ValidationErrorHandler (res:Response,status:HttpStatusCode,message:string) {
    return res
        .status(status)
        .send(ApiResponse.error(status,message));
}

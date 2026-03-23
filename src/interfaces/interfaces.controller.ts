import type { Request,Response,NextFunction } from "express";

export interface ControllerInterface{
    endPointCreate(req:Request,res:Response,next:NextFunction):Promise<void>;
    endPointFind(req:Request,res:Response,next:NextFunction):Promise<void>;
    endPointList(req:Request,res:Response,next:NextFunction):Promise<void>;
    endPointDelte(req:Request,res:Response,next:NextFunction):Promise<void>;
    endPointUpdate(req:Request,res:Response,next:NextFunction):Promise<void>;
}
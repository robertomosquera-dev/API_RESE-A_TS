import type { ControllerInterface } from "../interfaces/interfaces.controller.js";
import type { Request,Response,NextFunction } from "express";

export default class MovieController implements ControllerInterface{

    async endPointCreate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async endPointFind(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (error) {
            next(error);
        }    
    }

    async endPointList(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (error) {
            next(error);
        }
    }

    async endPointDelte(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (error) {
            next(error);
        }
    }
    
    async endPointUpdate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (error) {
            next(error);
        }    
    }
}
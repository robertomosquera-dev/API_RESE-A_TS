import type { ControllerInterface } from "../interfaces/interfaces.controller.js";
import type { Request,Response,NextFunction } from "express";
import type {actorCreateRequest} from "../dto/request/actor.request.js";
import ActorService from "../service/ActorService.js";
import {ApiResponse, HttpStatus} from "../utils/api.response.js";

export default class ActorController implements ControllerInterface {

    private actorService: ActorService = new ActorService();

    constructor() {
        this.endPointCreate = this.endPointCreate.bind(this);
    }

    async endPointCreate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const actor : actorCreateRequest = req.body;
            const result = await this.actorService.create(actor);
            res.status(200).send(
                ApiResponse.success(HttpStatus.CREATED,"Actor creado exitosamente",JSON.stringify(result))
            );
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
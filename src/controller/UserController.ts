import type { ControllerInterface } from "../interfaces/interfaces.controller.js";
import type { Request,Response,NextFunction } from "express";

export default class UserController implements ControllerInterface {
    async endPointCreate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(201).json({ message: "User created successfully" });
        } catch (error) {
            next(error);
        }
    }

    async endPointFind(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            res.status(200).json({ message: `User ${id} found` });
        } catch (error) {
            next(error);
        }
    }

    async endPointList(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            res.status(200).json({ message: "Users list retrieved" });
        } catch (error) {
            next(error);
        }
    }

    async endPointDelte(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            res.status(200).json({ message: `User ${id} deleted` });
        } catch (error) {
            next(error);
        }
    }

    async endPointUpdate(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            res.status(200).json({ message: `User ${id} updated` });
        } catch (error) {
            next(error);
        }
    }
}

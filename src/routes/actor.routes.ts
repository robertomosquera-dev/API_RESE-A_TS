import {Router} from "express";
import ActorController   from "../controller/ActorController.js";

const router = Router();
const actorController = new ActorController();

router.post('/',actorController.endPointCreate);

export default router;
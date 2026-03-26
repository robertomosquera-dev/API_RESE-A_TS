import Express, { type NextFunction, type Request, type Response }  from "express";
import { errorHandler } from "./exception/exception.handler.js";
import { MessageError } from "./exception/errors/MessageError.js";
import morgan from "morgan";
import BusinessError from "./exception/errors/BusinessError.js";
import { HttpStatus } from "./utils/api.response.js";
import ActorRoutes from "./routes/actor.routes.js";

const app = Express();

app.use(Express.json());

app.use(morgan('dev'))

app.use('/api/actor', ActorRoutes);

app.use(errorHandler);

export default app;
import Express, { type NextFunction, type Request, type Response }  from "express";
import { errorHandler } from "./exception/exception.handler.js";
import { MessageError } from "./exception/errors/MessageError.js";
import morgan from "morgan";
import BusinessError from "./exception/errors/BusinessError.js";
import { HttpStatus } from "./utils/api.response.js";

const app = Express();

app.use(Express.json());

app.use(morgan('dev'))

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new BusinessError(HttpStatus.NOT_FOUND, MessageError.MOVIE_NOT_FOUND);
  } catch (err) {
    next(err); 
  }
});

app.use(errorHandler);

export default app;
import type { HttpStatusCode } from "../../utils/api.response.js";

export default class EntityNotFound extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    message: string
  ) {
    super(message);
    this.name = "EntityNotFound";
    Error.captureStackTrace(this, this.constructor);
  }
}
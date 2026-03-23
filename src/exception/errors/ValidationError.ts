import type { HttpStatusCode } from "../../utils/api.response.js";

export default class ValidationError extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    message: string
  ) {
    super(message);
    this.name = "ValidationError";
    Error.captureStackTrace(this, this.constructor);
  }
}
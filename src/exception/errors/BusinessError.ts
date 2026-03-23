import type { HttpStatusCode } from "../../utils/api.response.js";

export default class BusinessError extends Error {
  constructor(
    public statusCode: HttpStatusCode,
    message: string
  ) {
    super(message);
    this.name = "BusinessError";
    Error.captureStackTrace(this, this.constructor);
  }
}
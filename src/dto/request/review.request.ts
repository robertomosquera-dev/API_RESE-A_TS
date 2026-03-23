import type {ReviewType} from "../../model/ReviewModel.js";

export type reviewCreateRequest = Readonly<Pick<ReviewType,"movieId" | "userId" | "content" | "score">>;


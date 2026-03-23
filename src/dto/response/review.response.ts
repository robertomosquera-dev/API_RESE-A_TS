import type {ReviewType} from "../../model/ReviewModel.js";

export type reviewDetailsResponse = Readonly<Pick<ReviewType,"id" | "content" | "score" | "createdAt">> & {
    userFullName:string
};
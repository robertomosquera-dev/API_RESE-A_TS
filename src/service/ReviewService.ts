import type { reviewCreateRequest } from "../dto/request/review.request.js";
import type { reviewDetailsResponse } from "../dto/response/review.response.js";
import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type { ReviewType } from "../model/ReviewModel.js";
import type { ReviewFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class ReviewService implements ServiceInterface<reviewCreateRequest,reviewDetailsResponse,number,ReviewFilters>{

    async create(data:reviewCreateRequest): Promise<reviewDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<reviewDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(pageRequest: PageRequest<reviewCreateRequest>): Promise<reviewDetailsResponse[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: reviewCreateRequest): Promise<reviewDetailsResponse> {
        throw new Error("Method not implemented.");
    }

}
import Prisma from "../utils/prisma.js";
import ReviewModel, { type ReviewType } from "../model/ReviewModel.js";
import type { ReviewFilters } from "../utils/filter.model.js";
import type { RepositoryInterface } from "../interfaces/interfaces.repository.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class ReviewRepository implements RepositoryInterface<ReviewModel,number,ReviewFilters>{
    async save(entity: ReviewModel): Promise<ReviewModel | null> {
        throw new Error("Method not implemented.");
    }
    async saveAll(entities: ReviewModel[]): Promise<number | null> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<ReviewModel | null> {
        throw new Error("Method not implemented.");
    }
    async findByFilter(filter: ReviewFilters): Promise<ReviewModel[]> {
        throw new Error("Method not implemented.");
    }
    async findAll(pageRequest: PageRequest<ReviewFilters>): Promise<ReviewModel[]> {
        throw new Error("Method not implemented.");
    }
    async existsById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: Partial<ReviewModel>): Promise<ReviewModel | null> {
        throw new Error("Method not implemented.");
    }
}
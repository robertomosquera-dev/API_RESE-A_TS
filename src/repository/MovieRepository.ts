import type { RepositoryInterface } from "../interfaces/interfaces.repository.js";
import MovieModel, { type MovieType } from "../model/MovieModel.js";
import type { MovieFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";
import Prisma from "../utils/prisma.js";

export default class MovieRepository implements RepositoryInterface<MovieModel,number,MovieFilters>{
    async save(entity: MovieModel): Promise<MovieModel | null> {
        throw new Error("Method not implemented.");
    }
    async saveAll(entities: MovieModel[]): Promise<MovieModel[] | null> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<MovieModel | null> {
        throw new Error("Method not implemented.");
    }
    async findByFilter(filter: MovieFilters): Promise<MovieModel[]> {
        throw new Error("Method not implemented.");
    }
    async findAll(pageRequest: PageRequest<MovieFilters>): Promise<MovieModel[]> {
        throw new Error("Method not implemented.");
    }
    async existsById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: Partial<MovieModel>): Promise<MovieModel | null> {
        throw new Error("Method not implemented.");
    }

}
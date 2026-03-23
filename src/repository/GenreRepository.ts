import type GenreModel  from "../model/GenreModel.js";
import type { RepositoryInterface } from "../interfaces/interfaces.repository.js";
import Prisma from "../utils/prisma.js";
import type { GenreFilter } from "../utils/filter.model.js";
import type { GenreType } from "../model/GenreModel.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class GenreRepository implements RepositoryInterface<GenreModel,number,GenreFilter>{
    async save(entity: GenreModel): Promise<GenreModel | null> {
        throw new Error("Method not implemented.");
    }
    async saveAll(entities: GenreModel[]): Promise<GenreModel[] | null> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<GenreModel | null> {
        throw new Error("Method not implemented.");
    }
    async findByFilter(filter: GenreFilter): Promise<GenreModel[]> {
        throw new Error("Method not implemented.");
    }
    async findAll(pageRequest: PageRequest<GenreFilter>): Promise<GenreModel[]> {
        throw new Error("Method not implemented.");
    }
    async existsById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: Partial<GenreModel>): Promise<GenreModel | null> {
        throw new Error("Method not implemented.");
    }
} 
import type ActorModel  from "../model/ActorModel.js";
import type { RepositoryInterface } from "../interfaces/interfaces.repository.js";
import type { ActorFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";
import Prisma from "../utils/prisma.js";
export default class ActorRepository implements RepositoryInterface<ActorModel,number,ActorFilters>{

    async save(entity: ActorModel): Promise<ActorModel | null> {
        throw new Error("Method not implemented.");
    }
    async saveAll(entities: ActorModel[]): Promise<ActorModel[] | null> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<ActorModel | null> {
        throw new Error("Method not implemented.");
    }
    async findByFilter(filter: ActorFilters): Promise<ActorModel[]> {
        throw new Error("Method not implemented.");
    }
    async findAll(pageRequest: PageRequest<ActorFilters>): Promise<ActorModel[]> {
        throw new Error("Method not implemented.");
    }
    async existsById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async update(id: number, entity: Partial<ActorModel>): Promise<ActorModel | null> {
        throw new Error("Method not implemented.");
    }
    
}
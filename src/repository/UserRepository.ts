import type { RepositoryInterface } from "../interfaces/interfaces.repository.js";
import type { UserFilter } from "../utils/filter.model.js";
import Prisma from "../utils/prisma.js";
import UserModel, { type UserType } from "../model/UserModel.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class UserRepository implements RepositoryInterface<UserModel,number,UserFilter>{
    async save(entity: UserModel): Promise<UserModel | null> {
        throw new Error("Method not implemented.");
    }
    async saveAll(entities: UserModel[]): Promise<number | null> {
        throw new Error("Method not implemented.");
    }
    async findById(id: number): Promise<UserModel | null> {
        throw new Error("Method not implemented.");
    }
    async findByFilter(filter: UserFilter): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }
    async findAll(pageRequest: PageRequest<UserFilter>): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }
    async existsById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: Partial<UserModel>): Promise<UserModel | null> {
        throw new Error("Method not implemented.");
    }
}
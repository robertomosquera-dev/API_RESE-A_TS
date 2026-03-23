import type { UserCreateRequest } from "../dto/request/user.request.js";
import type { userDetailsResponse } from "../dto/response/user.response.js";
import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type { UserType } from "../model/UserModel.js";
import type { UserFilter } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class UserService implements ServiceInterface<UserCreateRequest,userDetailsResponse,number,UserFilter>{
    async create(data:UserCreateRequest): Promise<userDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<userDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(pageRequest: PageRequest<UserFilter>): Promise<userDetailsResponse[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: UserCreateRequest): Promise<userDetailsResponse> {
        throw new Error("Method not implemented.");
    }

}
import type { actorCreateRequest } from "../dto/request/actor.request.js";
import type { actorDetailsResponse } from "../dto/response/actor.response.js";
import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type { ActorType } from "../model/ActorModel.js";
import type { ActorFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class ActorService implements ServiceInterface<actorCreateRequest,actorDetailsResponse,number,ActorFilters>{

    async create(data: actorCreateRequest ): Promise<actorDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<actorDetailsResponse>  {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(pageRequest: PageRequest<ActorFilters>): Promise<actorDetailsResponse[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: actorCreateRequest): Promise<actorDetailsResponse> {
        throw new Error("Method not implemented.");
    }

}

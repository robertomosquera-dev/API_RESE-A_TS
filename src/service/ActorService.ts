import type { actorCreateRequest } from "../dto/request/actor.request.js";
import type { actorDetailsResponse } from "../dto/response/actor.response.js";
import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type { ActorFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";
import ActorRepository from "../repository/ActorRepository.js";
import ActorModel from "../model/ActorModel.js";


export default class ActorService implements ServiceInterface<actorCreateRequest,actorDetailsResponse,number,ActorFilters>{

    private actorRepository: ActorRepository = new ActorRepository();

    async create(data: actorCreateRequest): Promise<actorDetailsResponse> {
        // crear ActorModel con valores por defecto
        const actorModel = new ActorModel(
            null,
            data.firstName,
            data.lastName,
            true, // isEnable por defecto
            data.birthDate ? new Date(data.birthDate) : null,
            new Date() // createdAt por defecto
        );

        const savedActor = await this.actorRepository.save(actorModel);

        return {
            id: savedActor.getId(),
            firstName: savedActor.getFirstName(),
            lastName: savedActor.getLastName(),
            birthDate: savedActor.getBirthDate(),
            createdAt: savedActor.getCreatedAt()
        };
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

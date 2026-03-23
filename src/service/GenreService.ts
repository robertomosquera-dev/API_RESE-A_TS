import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type {genreCreateRequest} from "../dto/request/genre.request.js";
import type { genreDetailsResponse } from "../dto/response/genre.response.js";
import type { GenreFilter } from "../utils/filter.model.js";
import type { GenreType } from "../model/GenreModel.js";
import type { PageRequest } from "../utils/PageRequest.js";
import GenreModel from "../model/GenreModel.js";

export default class GenreService implements ServiceInterface<genreCreateRequest,genreDetailsResponse,number,GenreFilter>{
    async create(data:genreCreateRequest ): Promise<genreDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<genreDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(pageRequest: PageRequest<GenreFilter>): Promise<genreDetailsResponse[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: genreCreateRequest): Promise<genreDetailsResponse> {
        throw new Error("Method not implemented.");
    }

}
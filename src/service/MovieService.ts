import type { movieCreateRequest } from "../dto/request/movie.request.js";
import type { movieDetailsResponse } from "../dto/response/movie.response.js";
import type { ServiceInterface } from "../interfaces/interfaces.service.js";
import type { MovieType } from "../model/MovieModel.js";
import type { MovieFilters } from "../utils/filter.model.js";
import type { PageRequest } from "../utils/PageRequest.js";

export default class MovieService implements ServiceInterface<movieCreateRequest,movieDetailsResponse,number,MovieFilters>{
    async create(data: movieCreateRequest): Promise<movieDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async getById(id: number): Promise<movieDetailsResponse> {
        throw new Error("Method not implemented.");
    }
    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    async getAll(pageRequest: PageRequest<MovieFilters>): Promise<movieDetailsResponse[]> {
        throw new Error("Method not implemented.");
    }
    async update(id: number, entity: Partial<movieCreateRequest>): Promise<movieDetailsResponse> {
        throw new Error("Method not implemented.");
    }
}
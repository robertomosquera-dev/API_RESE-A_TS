import ActorModel from "../model/ActorModel.js";
import type {RepositoryInterface} from "../interfaces/interfaces.repository.js";
import type {ActorFilters} from "../utils/filter.model.js";
import type {PageRequest} from "../utils/PageRequest.js";
import prisma from "../utils/prisma.js";
import ValidationError from "../exception/errors/ValidationError.js";
import {HttpStatus} from "../utils/api.response.js";
import EntityNotFound from "../exception/errors/EntityNotFound.js";
import Actor from "../model/ActorModel.js";

export default class ActorRepository implements RepositoryInterface<ActorModel,number,ActorFilters>{

    async save(entity: ActorModel): Promise<ActorModel> {
        if (!entity) throw new ValidationError(400, "La entidad no puede ser null");

        const actor = await prisma.actor.create({
            data: {
                firstName: entity.getFirstName(),
                lastName: entity.getLastName(),
                birthDate: entity.getBirthDate() ?? null,
                isEnable: entity.getIsEnable() ?? true
            }
        });

        return new ActorModel(
            actor.id,
            actor.firstName,
            actor.lastName,
            actor.isEnable,
            actor.birthDate,
            actor.createdAt
        );
    }
    async saveAll(entities: ActorModel[]): Promise<number | null> {
        if (entities.length <= 0) {
            throw new ValidationError(
                HttpStatus.BAD_REQUEST,
                "El array esta vacio"
            );
        }
        const actorsEntity = entities.map(entity => ({
            firstName: entity.getFirstName(),
            lastName: entity.getLastName(),
            birthDate: entity.getBirthDate() ?? null
        }));
        const result = await prisma.actor.createMany({
            data: actorsEntity
        });
        return result.count;
    }

    async findById(id: number): Promise<ActorModel> {

        if (!id || id <= 0) {
            throw new ValidationError(
                HttpStatus.UNPROCESSABLE,
                "El id no es válido"
            );
        }

        const result = await prisma.actor.findUniqueOrThrow({
            where: { id , isEnable: true }
        });

        if (!result) {
            throw new EntityNotFound(HttpStatus.NOT_FOUND, "Actor no encontrado");
        }

        return new ActorModel(
            result.id,
            result.firstName,
            result.lastName,
            result.isEnable,
            result.birthDate,
            result.createdAt
        );
    }

    async findByFilter(filter: ActorFilters): Promise<ActorModel[]> {
        throw new Error("Method not implemented.");
    }

    async findAll(pageRequest: PageRequest<ActorFilters>): Promise<ActorModel[]> {

        const { page = 1, size = 10, order = "asc", filter } = pageRequest;

        const where: any = {};

        if (filter?.firstName) {
            where.firstName = { contains: filter.firstName, mode: "insensitive" };
        }

        if (filter?.lastName) {
            where.lastName = { contains: filter.lastName, mode: "insensitive" };
        }

        if (filter?.isEnable !== undefined) {
            where.isEnable = filter.isEnable;
        }

        const [result,count] = await Promise.all([
            prisma.actor.findMany({
                skip: (pageRequest.page - 1) * size,
                take: size,
                orderBy: {id: order},
                where
            }),
            prisma.actor.count({where})
        ]);

        return result.map(value => {
            return new ActorModel(
                value.id,
                value.firstName,
                value.lastName,
                value.isEnable,
                value.birthDate,
                value.createdAt
            );
        });
    }
    async existsById(id: number): Promise<boolean> {

        const result = await prisma.actor.findUnique(
            {
                where: {id, isEnable: true},
                select: {id:true}
            }
        );

        return !!result;

    }

    async deleteById(id: number): Promise<boolean> {
        const result = await prisma.actor.updateMany({
            where: { id , isEnable: true },
            data: { isEnable: false }
        });

        if (result.count === 0) {
            throw new EntityNotFound(404, "Actor no encontrado");
        }

        return true;
    }


    async update(id: number, entity: Partial<ActorModel>): Promise<ActorModel> {

        const actor = await prisma.actor.findUnique({ where: { id , isEnable: true } });

        if (!actor) {
            throw new EntityNotFound(404, "Actor no encontrado");
        }

        const data: any = {};

        if (entity.getFirstName !== undefined) data.firstName = entity.getFirstName();
        if (entity.getLastName !== undefined) data.lastName = entity.getLastName();
        if (entity.getBirthDate !== undefined) data.birthDate = entity.getBirthDate();
        if (entity.getIsEnable !== undefined) data.isEnable = entity.getIsEnable();

        const updated = await prisma.actor.update({
            where: { id },
            data
        });

        return new ActorModel(
            updated.id,
            updated.firstName,
            updated.lastName,
            updated.isEnable,
            updated.birthDate,
            updated.createdAt
        );
    }

}
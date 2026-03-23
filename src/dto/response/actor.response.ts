import type { ActorType } from "../../model/ActorModel.js";

export type actorDetailsResponse = Readonly<Pick<ActorType,"id" | "firstName" | "lastName" | "birthDate" | "createdAt">>;
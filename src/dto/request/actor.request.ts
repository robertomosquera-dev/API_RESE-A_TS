import type { ActorType } from "../../model/ActorModel.js";

export type actorCreateRequest = Readonly<Pick<ActorType,"firstName" | "lastName" | "birthDate">>;
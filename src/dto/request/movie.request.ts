import type { MovieType } from "../../model/MovieModel.js";

export type movieCreateRequest = Readonly <Omit<MovieType,"id" | "isEnable" | "createdAt" | "updatedAt">> & {
  readonly genreIds ?: number[];
  readonly actorIds ?: number[];
};
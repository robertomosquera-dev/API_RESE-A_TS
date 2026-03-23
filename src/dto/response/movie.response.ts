import type { MovieType } from "../../model/MovieModel.js";

export type movieDetailsResponse = Readonly <Omit<MovieType, "isEnable" | "createdAt" >> & {
  readonly genreNames : string[];
  readonly actorNames : string[];
};
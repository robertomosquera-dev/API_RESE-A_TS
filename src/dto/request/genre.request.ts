import type { GenreType } from "../../model/GenreModel.js";

export type genreCreateRequest = Readonly <Pick <GenreType,"name"> >;
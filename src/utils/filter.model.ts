
import type { ActorType } from "../model/ActorModel.js";
import type { GenreType } from "../model/GenreModel.js";
import type { MovieType } from "../model/MovieModel.js";
import type { ReviewType } from "../model/ReviewModel.js";
import type { UserType } from "../model/UserModel.js";

export type ActorFilters=Partial<Pick<ActorType,"firstName"|"lastName"|"isEnable"|"birthDate">>;

export type GenreFilter=Partial<Pick<GenreType,"isEnable">>;

export type MovieFilters=Partial<Pick<MovieType,"duration"|"rating"|"year"|"isEnable">>;

export type ReviewFilters=Partial<Pick<ReviewType,"score"|"movieId"|"userId">>;

export type UserFilter=Partial<Pick<UserType,"isEnable">>
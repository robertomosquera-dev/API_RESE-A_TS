import type {UserType} from "../../model/UserModel.js";

export type userDetailsResponse = Readonly<Omit<UserType,"email"|"password">>;
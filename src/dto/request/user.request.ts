import type {UserType} from "../../model/UserModel.js";

export type userLoginRequest = Readonly < Pick < UserType,"email" | "password" >>;

export type UserCreateRequest = Readonly <Pick <UserType, "firstName" | "lastName" | "email" | "password">>;

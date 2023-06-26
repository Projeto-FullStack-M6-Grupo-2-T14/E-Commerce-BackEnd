import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
	listAllUsersSchema,
	userResponse,
	userSchema,
	userSchemaRequest,
	userSchemaResponse,
	userUpdateSchemaRequest,
} from "../schemas/users.schema";

export type TUser = z.infer<typeof userSchema>;
export type TUserRequest = z.infer<typeof userSchemaRequest>;
export type TUserPartial = DeepPartial<z.infer<typeof userUpdateSchemaRequest>>;
export type TUserResponse = z.infer<typeof userSchemaResponse>;
export type TUpdateUserResponse = z.infer<typeof userResponse>;
export type TListUsers = z.infer<typeof listAllUsersSchema>;

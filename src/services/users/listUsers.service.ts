import { listAllUsersSchema } from "../../schemas/users.schema.js";
import { Repository } from "typeorm";
import { User } from "../../entities.js";
import { AppDataSource } from "../../data-source.js";
import { TListUsers } from "../../interfaces/users.interface.js";

export const listUserServices = async (): Promise<TListUsers> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const findUsers: Array<User> = await userRepository.find();

	const users = listAllUsersSchema.parse(findUsers);

	return users;
};

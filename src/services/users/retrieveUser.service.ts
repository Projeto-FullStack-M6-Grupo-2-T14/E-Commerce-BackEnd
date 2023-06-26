import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import {
	listUserSchemaResponse,
	userSchemaResponse,
} from "../../schemas/users.schema";
import {
	TUpdateUserResponse,
	TUserResponse,
} from "../../interfaces/users.interface";

export const retrieveUserServices = async (
	userId: number
): Promise<TUpdateUserResponse> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepository.findOneBy({ id: userId });

	const userValid = listUserSchemaResponse.parse(user);

	return userValid;
};

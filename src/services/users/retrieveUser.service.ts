import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js"; 
import { listUserSchemaResponse } from "../../schemas/users.schema.js";
import { TUpdateUserResponse } from "../../interfaces/users.interface.js";
import { AppError } from "../../error.js";
import { User } from "../../entities/users.entity.js";

export const retrieveUserServices = async (
	userId: number
): Promise<TUpdateUserResponse> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepository.findOneBy({ id: userId });

	if (!user) {
		throw new AppError("User not found", 404);
	}

	const userValid = listUserSchemaResponse.parse(user);

	return userValid;
};

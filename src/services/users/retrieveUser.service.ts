import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { listUserSchemaResponse } from "../../schemas/users.schema";
import { TUpdateUserResponse } from "../../interfaces/users.interface";
import { AppError } from "../../error";

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

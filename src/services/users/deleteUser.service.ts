import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { AppError } from "../../error.js";
import { User } from "../../entities/users.entity.js";

export const deleteUserServices = async (userId: number): Promise<void> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepository.findOneBy({
		id: userId,
	});

	if (!user) {
		throw new AppError("User not found", 404);
	}

	await userRepository.remove(user!);
};

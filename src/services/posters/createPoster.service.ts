import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { Poster, User } from "../../entities/index.js";
import { posterSchema } from "../../schemas/posters.schema.js";
import { TExitPoster } from "../../interfaces/posters.interface.js";

const createPosterServices = async (
	payload: any,
	userId: number
): Promise<TExitPoster> => {
	const posterRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepository.findOne({
		where: { id: userId },
	});

	const poster: Poster[] = posterRepository.create({
		...payload,
		user: user,
	});

	await posterRepository.save(poster);

	return posterSchema.parse(poster);
};

export default createPosterServices;

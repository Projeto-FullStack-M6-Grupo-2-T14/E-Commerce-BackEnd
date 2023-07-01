import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster, User } from "../../entities/index";
import { posterSchema } from "../../schemas/posters.schema";
import { TExitPoster } from "../../interfaces/posters.interface";

const createPosterServices = async (payload: any, userId: number): Promise<TExitPoster> => {
	const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user: User | null = await userRepository.findOne({ where: { id: userId } });

	const poster: Poster[] = posterRepository.create({
		...payload,
		user: user,
	});

	await posterRepository.save(poster);

	return posterSchema.parse(poster);
};

export default createPosterServices;

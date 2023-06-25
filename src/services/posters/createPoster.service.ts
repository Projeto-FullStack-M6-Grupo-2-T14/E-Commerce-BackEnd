import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster, User } from "../../entities/index";
import { exitPosterSchema } from "../../schemas/posters.schema";

export const createPosterServices = async (payload: any, userId: number) => {
	const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
	const userRepository: Repository<User> = AppDataSource.getRepository(User)
	const user: User | null = await userRepository.findOne({
		where: {
			id: userId
		}
	})
    const poster: Poster[] = posterRepository.create({
		...payload,
		user: user
	});
	console.log(poster)
	await posterRepository.save(poster);

	return exitPosterSchema.parse(poster)
};
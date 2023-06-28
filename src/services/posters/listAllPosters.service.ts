import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster } from "../../entities/index";
import { TListPosters } from "../../interfaces/posters.interface";
import { listAllPostersSchema } from "../../schemas/posters.schema";

const listAllPostersService = async (): Promise<TListPosters> => {
	const postersRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const posters: Array<Poster> = await postersRepository.find({
		relations: {
			user: true,
		},
	});
	const returnPosters = listAllPostersSchema.parse(posters)

	return returnPosters;
};

export default listAllPostersService;

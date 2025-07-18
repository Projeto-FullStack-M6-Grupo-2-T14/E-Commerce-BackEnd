import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { Poster } from "../../entities/index.js";
import { TListPosters } from "../../interfaces/posters.interface.js";
import { listAllPostersSchema } from "../../schemas/posters.schema.js";

const listAllPostersService = async (): Promise<TListPosters> => {
	const postersRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const posters: Array<Poster> = await postersRepository.find({
		relations: { user: true },
	});

	//return listAllPostersSchema.parse(posters);

	return posters;
};

export default listAllPostersService;

import { Repository } from "typeorm";
import { Poster } from "../../entities/index.js";
import { TListPosters } from "../../interfaces/posters.interface.js";
import { AppDataSource } from "../../data-source.js";
import { listAllPostersSchema } from "../../schemas/posters.schema.js";

const listUserPostersService = async (
	userId: number
): Promise<TListPosters> => {
	const postersRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const posters: Poster[] = await postersRepository.find({
		where: { user: { id: userId } },
		relations: ["user"],
	});

	//return listAllPostersSchema.parse(posters);;

	return posters;
};

export default listUserPostersService;

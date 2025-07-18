import { AppDataSource } from "../../data-source.js";
import { Poster } from "../../entities/index.js";
import { Repository } from "typeorm";
import { AppError } from "../../error.js";

const deletePostersService = async (posterId: number) => {
	const posterRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const poster: Poster | null = await posterRepository.findOne({
		where: { id: posterId },
	});

	if (!poster) {
		throw new AppError("Poster not found", 404);
	}

	await posterRepository.delete(posterId);
};

export default deletePostersService;

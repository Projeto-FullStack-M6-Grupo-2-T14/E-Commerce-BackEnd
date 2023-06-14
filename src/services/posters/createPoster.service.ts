import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster } from "../../entities/index";

export const createPosterServices = async (payload: any): Promise<Poster[]> => {
	const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
    const poster: Poster[] = posterRepository.create(payload);
	
	await posterRepository.save(poster);

	return poster;
};
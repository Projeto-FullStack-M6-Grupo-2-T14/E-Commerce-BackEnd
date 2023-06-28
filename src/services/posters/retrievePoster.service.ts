import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { exitPosterSchema } from "../../schemas/posters.schema";
import { TExitPoster } from "../../interfaces/posters.interface";
import { Poster } from "../../entities";
import { AppError } from "../../error";

const retrievePosterServices = async (posterId: number): Promise<TExitPoster> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
  
    const poster: Poster | null = await posterRepository
    .createQueryBuilder('poster')
    .leftJoinAndSelect('poster.user', 'user')
    .where('poster.id = :id', { id: posterId })
    .getOne();

    if(!poster) {
        throw new AppError('Poster not found', 404)
    }
  
    return exitPosterSchema.parse(poster);
  
}

export default retrievePosterServices


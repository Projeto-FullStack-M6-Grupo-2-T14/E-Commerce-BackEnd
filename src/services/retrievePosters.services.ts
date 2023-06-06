import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { exitPosterSchema } from "../schemas/posters.schema";
import { iExitPoster } from "../interfaces/posters.interface";
import { Poster } from "../entities";

export const retrievePosterServices = async (posterId: number): Promise<iExitPoster> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
  
    const poster: Poster | null = await posterRepository.findOneBy({ id: posterId });
  
    return exitPosterSchema.parse(poster);
  
  };
  
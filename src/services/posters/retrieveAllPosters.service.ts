import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster } from "../../entities/index";
import { iExitPoster } from "../../interfaces/posters.interface";
import { exitPosterSchema } from "../../schemas/posters.schema";

const listAllPostersService = async (): Promise<iExitPoster> => {
  const postersRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
  const posters: Array<Poster> = await postersRepository.find();
  const returnPosters: iExitPoster = exitPosterSchema.parse(posters);

  return returnPosters;
};

export default listAllPostersService;

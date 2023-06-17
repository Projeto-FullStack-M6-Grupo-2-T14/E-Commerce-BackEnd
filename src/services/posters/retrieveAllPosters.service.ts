import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster } from "../../entities/index";
import { iListPosters } from "../../interfaces/posters.interface";
import { listAllPostersSchema } from "../../schemas/posters.schema";

const listAllPostersService = async (): Promise<iListPosters> => {
  const postersRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
  const posters: Array<Poster> = await postersRepository.find();
  const returnPosters = listAllPostersSchema.parse(posters);

  return returnPosters;
};

export default listAllPostersService;

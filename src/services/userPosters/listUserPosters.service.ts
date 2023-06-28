import { Repository } from 'typeorm';
import { Poster } from '../../entities';
import { TListPosters } from '../../interfaces/posters.interface';
import { AppDataSource } from '../../data-source';
import { listAllPostersSchema } from '../../schemas/posters.schema';

const listUserPostersService = async (userId: number): Promise<TListPosters> => {
  const postersRepository: Repository<Poster> = AppDataSource.getRepository(Poster);

  const posters: Poster[] = await postersRepository.find({
    where: { user: { id: userId } },
    relations: ['user'],
  });

  const returnPosters: TListPosters = listAllPostersSchema.parse(posters);

  return returnPosters;
};

export default listUserPostersService;

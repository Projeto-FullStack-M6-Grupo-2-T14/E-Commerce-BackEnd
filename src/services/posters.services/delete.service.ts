import { AppDataSource } from '../../data-source'
import { Poster } from '../../entities/index'
import { AppError } from '../../error'
import { Repository } from "typeorm";

export const deletePostersService = async (posterId: number) => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);
  
    const poster: Poster | null = await posterRepository.findOne({
      where: {
        id: Number(posterId)
      }});
  
    if (!poster) {
      return false;
    }
  
    await posterRepository.delete(posterId);
  
    return true;
  };
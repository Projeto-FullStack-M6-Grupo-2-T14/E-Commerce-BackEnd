import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Poster } from '../../entities/index'
import { AppError } from '../../error'
import { updateSchemaResponse } from '../../schemas/posters.schema'
import { TUpdatePoster, TUpdatePosterResponse } from '../../interfaces/posters.interface'

const updatePosterService = async (payload: TUpdatePoster, posterId: number, userId: number): Promise<TUpdatePosterResponse> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)

    const poster: Poster | null = await posterRepository.findOne({
        where: { id: posterId },
        relations: ['user'],
    })

    if (!poster) {
        throw new AppError('Poster not found', 404)
    }

    if (poster.user.id !== userId) {
        throw new AppError('You are not the owner of this poster', 403);
    }
    
    const updatedPoster = Object.assign(poster, payload);
    
    await posterRepository.save(updatedPoster);

    return updateSchemaResponse.parse(updatedPoster);
}

export default updatePosterService
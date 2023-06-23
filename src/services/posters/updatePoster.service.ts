import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Poster } from '../../entities/index'
import { AppError } from '../../error'
import { exitPosterSchema } from '../../schemas/posters.schema'
import { TExitPoster } from '../../interfaces/posters.interface'

const updatePosterService = async (posterData: any, posterId: number): Promise<TExitPoster> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    const poster: Poster | null = await posterRepository.findOneBy({
        id: posterId
    })
    if (!poster) {
        throw new AppError('Poster not found', 404)
    }
    posterRepository.merge(poster, posterData)
    const updatedPoster: TExitPoster = await posterRepository.save(poster)
    return exitPosterSchema.parse(updatedPoster)
}

export default updatePosterService
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Poster } from '../entities/index'
import { AppError } from '../error'
import { } from '../interfaces'
import { iEntryPoster, iEntryUpdatePoster, iExitPoster } from '../interfaces/posters.interface'
import { } from '../schemas'
import { exitPosterSchema } from '../schemas/posters.schema'

const createScheduleService = async (scheduleData: iRequestCreateScheduleWidthUserId): Promise<iResultCreateSchedule> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    
    return;
}

const updatePosterService = async (posterData: iEntryUpdatePoster, posterId: number): Promise<iExitPoster> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    const poster: Poster | null = await posterRepository.findOneBy({
        id: posterId
    })
    if (!poster) {
        throw new AppError('Poster not found', 404)
    }
    posterRepository.merge(poster, posterData)
    const updatedPoster: iExitPoster = await posterRepository.save(poster)
    return exitPosterSchema.parse(updatedPoster)
}


export { createScheduleService, updatePosterService } 
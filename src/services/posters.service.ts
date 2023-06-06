import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { Poster } from '../entities/index'
import { AppError } from '../error'
import { iEntryPoster, iExitPoster } from '../interfaces/posters.interface'

const createScheduleService = async (scheduleData: iEntryPoster): Promise<iExitPoster> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    
    return
}

export default createScheduleService
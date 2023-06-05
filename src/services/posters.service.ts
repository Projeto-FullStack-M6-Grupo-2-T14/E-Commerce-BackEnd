import { AppDataSource } from '../data-source'
import { Poster } from '../entities/index'
import { AppError } from '../error'
import { } from '../interfaces'
import { } from '../schemas'

const createScheduleService = async (scheduleData: iRequestCreateScheduleWidthUserId): Promise<iResultCreateSchedule> => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    
    return;
}

export default createScheduleService
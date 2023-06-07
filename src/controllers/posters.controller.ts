import { Request, Response } from 'express'
import { iEntryPoster, iExitPoster } from '../interfaces/posters.interface'
import { updatePosterService } from '../services/posters.service'

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
    const posterData = req.body
    const newPoster = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

const updatePoster = async (req: Request, res: Response): Promise<Response> => {
    const newPosterData: iEntryPoster = req.body
    const posterId: number = res.locals.id
    const updatedPoster: iExitPoster = await updatePosterService(newPosterData, posterId)
    return res.status(200).json({updatePoster})
}

export{ createPosterController }
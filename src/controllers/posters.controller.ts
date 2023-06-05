import { Request, Response } from 'express'

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
    const posterData = req.body
    const newPoster = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

export{ createPosterController }
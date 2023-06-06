import { Request, Response } from 'express'
import { iExitPoster } from '../interfaces/posters.interface'
import { retrievePosterServices } from '../services/retrievePosters.services'

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
    const posterData = req.body
    //const newPoster = await createCategoryService(categoryData)

    return res.status(201).json()
}

const retrievePosterController = async (req: Request, res: Response): Promise<Response> => {

    const posterId = parseInt(req.params.id)
  
    const poster: iExitPoster = await retrievePosterServices(posterId)
  
    return res.status(200).json(poster);
  };

export{ createPosterController, retrievePosterController }
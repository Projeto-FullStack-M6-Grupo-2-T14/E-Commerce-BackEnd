import { Request, Response } from 'express'
import {deletePostersService} from '../services/posters.services/delete.service'

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
    const posterData = req.body
    const newPoster = await createCategoryService(categoryData)

    return res.status(201).json(newCategory)
}

export{ createPosterController }


export const deletePostersController = async (req: Request, res: Response) => {

    const posterId = req.params.id;
  
    const deleted = await deletePostersService(Number(posterId));
  
    if (!deleted) {
      return res.status(404).json({ error: "Poster not found" });
    }
  
    return res.status(200).json({ message: "Poster deleted successfully" });
   
  };
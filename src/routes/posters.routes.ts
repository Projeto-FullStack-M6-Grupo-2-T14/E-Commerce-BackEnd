import { Router } from 'express'
import { 
    listAllPostersController, 
    deletePostersController, 
    retrievePosterController, 
    createPosterController, 
    updatePosterController 
} from '../controllers/posters.controllers'
import validateData from '../middlewares/validateData.middleware'
import { entryPosterSchema } from '../schemas/posters.schema'

const postersRoutes: Router = Router()

postersRoutes.get('', listAllPostersController)
postersRoutes.get('/:id', retrievePosterController)
postersRoutes.delete('/:id', deletePostersController)
postersRoutes.post('', validateData(entryPosterSchema), createPosterController)
postersRoutes.patch('/:id', validateData(entryPosterSchema.partial()), updatePosterController)

export default postersRoutes

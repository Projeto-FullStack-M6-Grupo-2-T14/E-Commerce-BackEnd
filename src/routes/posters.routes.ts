import { Router } from 'express'
import validateData from '../middlewares/validateData.middleware'
import { entryPosterSchema } from '../schemas/posters.schema'
import { ensureAuthIsValidMiddleware } from '../middlewares/ensureAuthIsValid.middleware'
import { 
    listAllPostersController, 
    deletePostersController, 
    retrievePosterController, 
    createPosterController, 
    updatePosterController 
} from '../controllers/posters.controllers'


const postersRoutes: Router = Router()

postersRoutes.get('', ensureAuthIsValidMiddleware, listAllPostersController)
postersRoutes.get('/:id', ensureAuthIsValidMiddleware, retrievePosterController)
postersRoutes.delete('/:id', ensureAuthIsValidMiddleware, deletePostersController)
postersRoutes.post('', ensureAuthIsValidMiddleware, validateData(entryPosterSchema), createPosterController)
postersRoutes.patch('/:id', ensureAuthIsValidMiddleware, validateData(entryPosterSchema.partial()), updatePosterController)

export default postersRoutes

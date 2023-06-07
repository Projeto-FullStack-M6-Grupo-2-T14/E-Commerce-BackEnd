import { Router } from 'express'
import { listAllPostersController, deletePostersController, retrievePosterController, createPosterController, updatePosterController } from '../controllers/posters.controllers'

const postersRoutes: Router = Router()

postersRoutes.get('', listAllPostersController)
postersRoutes.get('/:id', retrievePosterController)
postersRoutes.delete('/:id', deletePostersController)
postersRoutes.post('', createPosterController)
postersRoutes.patch('/:id', updatePosterController)

export default postersRoutes

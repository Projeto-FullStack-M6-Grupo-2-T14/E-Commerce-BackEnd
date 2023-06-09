import { Router } from 'express'
import { updatePosterController } from '../controllers/posters.controller'

const postersRoutes: Router = Router()

postersRoutes.patch('/:id', updatePosterController)


export default postersRoutes

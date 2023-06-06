import { Router } from 'express'
import { deletePostersController } from '../controllers/posters.controller'
const portersRoutes: Router = Router()


portersRoutes.delete('/:id', deletePostersController);


export default portersRoutes

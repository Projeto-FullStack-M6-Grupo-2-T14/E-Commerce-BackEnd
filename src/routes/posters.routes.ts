import { Router } from 'express'
import { retrievePosterController } from '../controllers/posters.controller'

const postersRoutes: Router = Router()

postersRoutes.get("/:id", retrievePosterController)

export default postersRoutes

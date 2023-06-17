import { Router } from 'express'
import { generateTokenController } from '../controllers/login.controllers'


const loginRoutes = Router()
loginRoutes.post('', generateTokenController)


export {loginRoutes}

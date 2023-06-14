import { Router } from 'express';
import validateData from '../middlewares/validateData.middleware';
import { entryUserSchema } from '../schemas/users.schema';
import { createUserController } from '../controllers/users.controller';

const usersRoutes: Router = Router()

usersRoutes.post('', validateData(entryUserSchema), createUserController)

export default usersRoutes
import { Router } from 'express';
import validateData from '../middlewares/validateData.middleware';
import { entryUserSchema } from '../schemas/users.schema';
import { createUserController, deleteUserController, listUserController } from '../controllers/users.controller';

const usersRoutes: Router = Router()

usersRoutes.post('', validateData(entryUserSchema), createUserController)
usersRoutes.get('', listUserController)
usersRoutes.delete('/:id', deleteUserController)


export default usersRoutes
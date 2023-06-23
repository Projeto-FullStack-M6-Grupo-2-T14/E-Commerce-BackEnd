import { Router } from 'express';
import validateData from '../middlewares/validateData.middleware';
import { entryUserSchema } from '../schemas/users.schema';
import { createUserController, deleteUserController, listUserController, updateUserController } from '../controllers/users.controller';
import { ensureAuthIsValidMiddleware } from '../middlewares/ensureAuthIsValid.middleware';

const usersRoutes: Router = Router()

usersRoutes.post('', validateData(entryUserSchema), createUserController)
usersRoutes.get('', listUserController)
usersRoutes.delete('/:id', ensureAuthIsValidMiddleware, deleteUserController)
usersRoutes.patch('/:id', ensureAuthIsValidMiddleware, updateUserController)

export default usersRoutes
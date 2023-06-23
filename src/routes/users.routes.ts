import { Router } from 'express';
import validateData from '../middlewares/validateData.middleware';
import ensureAuthIsValidMiddleware from '../middlewares/ensureAuthIsValid.middleware';
import { entryUserSchema } from '../schemas/users.schema';
import { createUserController, deleteUserController, listUserController, updateUserController } from '../controllers/users.controller';
import isUserOrOwner from '../middlewares/ensureIsOwner.middleware';

const usersRoutes: Router = Router()

usersRoutes.post('', validateData(entryUserSchema), createUserController)
usersRoutes.get('', listUserController)
usersRoutes.delete('/:id', ensureAuthIsValidMiddleware, isUserOrOwner, deleteUserController)
usersRoutes.patch('/:id', ensureAuthIsValidMiddleware, isUserOrOwner, updateUserController)

export default usersRoutes
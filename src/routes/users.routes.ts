import { Router } from 'express';
import validateData from '../middlewares/validateData.middleware';
import ensureAuthIsValidMiddleware from '../middlewares/ensureAuthIsValid.middleware';
import { createUserController, deleteUserController, listUserController, updateUserController } from '../controllers/users.controller';
import isUserOrOwner from '../middlewares/ensureIsOwner.middleware';
import { userSchemaRequest, userSchemaUpdate } from '../schemas/user.schema';

const usersRoutes: Router = Router()

usersRoutes.post('', validateData(userSchemaRequest), createUserController)
usersRoutes.get('', listUserController)
usersRoutes.delete('/:id', ensureAuthIsValidMiddleware, isUserOrOwner, deleteUserController)
usersRoutes.patch('/:id', validateData(userSchemaUpdate), ensureAuthIsValidMiddleware, isUserOrOwner, updateUserController)

export default usersRoutes
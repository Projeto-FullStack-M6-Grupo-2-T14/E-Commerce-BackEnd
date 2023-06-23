import { Router } from 'express';
import { updateAddressController } from '../controllers/address.controllers';
import validateData from '../middlewares/validateData.middleware';
import { partialEntryAddressSchema } from '../schemas/users.schema';
import ensureAuthIsValidMiddleware from '../middlewares/ensureAuthIsValid.middleware';
import isUserOrOwner from '../middlewares/ensureIsOwner.middleware';

const addressRoutes: Router = Router()

addressRoutes.patch('/:id', validateData(partialEntryAddressSchema), ensureAuthIsValidMiddleware, isUserOrOwner, updateAddressController)

export default addressRoutes

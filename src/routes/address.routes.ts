import { Router } from 'express';
import { updateAddressController } from '../controllers/address.controllers';
import validateData from '../middlewares/validateData.middleware';
import { partialEntryAddressSchema } from '../schemas/users.schema';
import { ensureAuthIsValidMiddleware } from '../middlewares/ensureAuthIsValid.middleware';

const addressRoutes: Router = Router()

addressRoutes.patch('/:id', validateData(partialEntryAddressSchema), ensureAuthIsValidMiddleware, updateAddressController)

export default addressRoutes

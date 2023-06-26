import { Router } from 'express';
import { updateAddressController } from '../controllers/address.controllers';
import validateData from '../middlewares/validateData.middleware';
import ensureAuthIsValidMiddleware from '../middlewares/ensureAuthIsValid.middleware';
import { partialAddressSchema } from '../schemas/address.schema';

const addressRoutes: Router = Router()

addressRoutes.patch('/:id', validateData(partialAddressSchema), ensureAuthIsValidMiddleware, updateAddressController)

export default addressRoutes

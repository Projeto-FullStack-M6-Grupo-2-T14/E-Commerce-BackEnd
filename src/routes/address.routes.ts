import { Router } from "express";
import { updateAddressController } from "../controllers/address.controllers.js";
import validateData from "../middlewares/validateData.middleware.js";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware.js";
import { partialAddressSchema } from "../schemas/address.schema.js";

const addressRoutes: Router = Router();

addressRoutes.patch(
	"/:id",
	validateData(partialAddressSchema),
	ensureAuthIsValidMiddleware,
	updateAddressController
);

export default addressRoutes;

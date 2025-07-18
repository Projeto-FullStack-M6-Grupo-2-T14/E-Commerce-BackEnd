import { Router } from "express";
import validateData from "../middlewares/validateData.middleware.js";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware.js";
import {
	posterSchemaRequest,
	updatePosterSchema,
} from "../schemas/posters.schema.js";
import {
	listAllPostersController,
	deletePostersController,
	retrievePosterController,
	createPosterController,
	updatePosterController,
} from "../controllers/posters.controllers.js";

const postersRoutes: Router = Router();

postersRoutes.post(
	"",
	ensureAuthIsValidMiddleware,
	validateData(posterSchemaRequest),
	createPosterController
);
postersRoutes.get("", listAllPostersController);
postersRoutes.get("/:id", retrievePosterController);
postersRoutes.patch(
	"/:id",
	ensureAuthIsValidMiddleware,
	validateData(updatePosterSchema),
	updatePosterController
);
postersRoutes.delete(
	"/:id",
	ensureAuthIsValidMiddleware,
	deletePostersController
);

export default postersRoutes;

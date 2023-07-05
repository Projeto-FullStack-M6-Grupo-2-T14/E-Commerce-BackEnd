import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";
import { posterSchemaRequest, updatePosterSchema } from "../schemas/posters.schema";
import {
	listAllPostersController,
	deletePostersController,
	retrievePosterController,
	createPosterController,
	updatePosterController,
} from "../controllers/posters.controllers";

const postersRoutes: Router = Router();

postersRoutes.post("", ensureAuthIsValidMiddleware, validateData(posterSchemaRequest), createPosterController);
postersRoutes.get("", listAllPostersController);
postersRoutes.get("/:id", retrievePosterController);
postersRoutes.patch("/:id", ensureAuthIsValidMiddleware, validateData(updatePosterSchema), updatePosterController);
postersRoutes.delete("/:id", ensureAuthIsValidMiddleware, deletePostersController);

export default postersRoutes;

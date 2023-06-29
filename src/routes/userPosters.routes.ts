import { Router } from "express";
import listUserPostersController from "../controllers/userPosters.controllers";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";

const userPosterRoutes: Router = Router();

userPosterRoutes.get(
	"/:id",
	ensureAuthIsValidMiddleware,
	listUserPostersController
);

export default userPosterRoutes;

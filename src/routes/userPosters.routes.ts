import { Router } from "express";
import listUserPostersController from "../controllers/userPosters.controllers";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";
import isUserOrOwner from "../middlewares/ensureIsOwner.middleware";

const userPosterRoutes: Router = Router();

userPosterRoutes.get("/:id", ensureAuthIsValidMiddleware, isUserOrOwner, listUserPostersController);

export default userPosterRoutes
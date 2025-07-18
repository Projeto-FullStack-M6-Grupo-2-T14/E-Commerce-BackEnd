import { Router } from "express";
import listUserPostersController from "../controllers/userPosters.controllers.js";

const userPosterRoutes: Router = Router();

userPosterRoutes.get("/:id", listUserPostersController);

export default userPosterRoutes;

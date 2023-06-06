import { Router } from "express";
import {
	createPosterController,
	retrievePosterController,
} from "../controllers/posters.controller";

const postersRoutes: Router = Router();

postersRoutes.get("/:id", retrievePosterController);
postersRoutes.post("", createPosterController);

export default postersRoutes;

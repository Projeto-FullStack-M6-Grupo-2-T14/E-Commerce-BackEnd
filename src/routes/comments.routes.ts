import { Router } from "express";
import {
	createCommentController,
	deleteCommentController,
	editCommentController,
	listCommentController,
} from "../controllers/comments.controllers.js";
import validateData from "../middlewares/validateData.middleware.js";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware.js";
import { commentSchemaRequest } from "../schemas/comments.schema.js";

const commentsRoutes: Router = Router();

commentsRoutes.post(
	"/:id",
	validateData(commentSchemaRequest),
	ensureAuthIsValidMiddleware,
	createCommentController
);
commentsRoutes.get("/:id", ensureAuthIsValidMiddleware, listCommentController);
commentsRoutes.patch(
	"/:id",
	ensureAuthIsValidMiddleware,
	editCommentController
);
commentsRoutes.delete(
	"/:id",
	ensureAuthIsValidMiddleware,
	deleteCommentController
);

export default commentsRoutes;

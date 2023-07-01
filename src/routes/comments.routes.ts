import { Router } from "express";
import { createCommentController, listCommentController } from "../controllers/comments.controllers";
import validateData from "../middlewares/validateData.middleware";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";
import { commentSchemaRequest } from "../schemas/comments.schema";


const commentsRoutes: Router = Router()

commentsRoutes.post('/:id', validateData(commentSchemaRequest), ensureAuthIsValidMiddleware, createCommentController)
commentsRoutes.get('/:id', listCommentController)

export default commentsRoutes
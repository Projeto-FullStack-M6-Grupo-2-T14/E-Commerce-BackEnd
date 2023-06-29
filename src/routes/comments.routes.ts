import { Router } from "express";
import { createCommentController } from "../controllers/comments.controllers";
import validateData from "../middlewares/validateData.middleware";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";
import { commentSchemaRequest } from "../schemas/comments.schema";


const commentsRoutes: Router = Router()

commentsRoutes.post('', validateData(commentSchemaRequest), ensureAuthIsValidMiddleware, createCommentController)


export { commentsRoutes }
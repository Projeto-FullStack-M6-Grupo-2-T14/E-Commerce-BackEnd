import { Router } from "express";
import validateData from "../middlewares/validateData.middleware.js";
import { userSchemaRequest } from "../schemas/users.schema.js";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware.js";
import {
	createUserController,
	deleteUserController,
	listUserController,
	resetUserPassController,
	retrieveUserController,
	sendEmailUserController,
	updateUserController,
} from "../controllers/users.controller.js";

const usersRoutes: Router = Router();

usersRoutes.post("", validateData(userSchemaRequest), createUserController);
usersRoutes.get("", listUserController);
usersRoutes.get("/:id", retrieveUserController);
usersRoutes.patch("/:id", ensureAuthIsValidMiddleware, updateUserController);
usersRoutes.delete("/:id", ensureAuthIsValidMiddleware, deleteUserController);
usersRoutes.post("/sendemail", sendEmailUserController);
usersRoutes.post("/resetpassword", resetUserPassController);

export default usersRoutes;

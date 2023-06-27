import { Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import {
	createUserController,
	deleteUserController,
	listUserController,
	resetUserPassController,
	retrieveUserController,
	sendEmailUserController,
	updateUserController,
} from "../controllers/users.controller";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";

const usersRoutes: Router = Router();

usersRoutes.get("", listUserController);
usersRoutes.get("/:id", ensureAuthIsValidMiddleware, retrieveUserController);
usersRoutes.post("", validateData(userSchemaRequest), createUserController);
usersRoutes.post("/sendemail", sendEmailUserController);
usersRoutes.post("/resetpassword", resetUserPassController);
usersRoutes.delete("/:id", ensureAuthIsValidMiddleware, deleteUserController);
usersRoutes.patch("/:id", ensureAuthIsValidMiddleware, updateUserController);

export default usersRoutes;

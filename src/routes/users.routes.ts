import { Request, Response, Router } from "express";
import validateData from "../middlewares/validateData.middleware";
import { userSchemaRequest } from "../schemas/users.schema";
import {
	createUserController,
	deleteUserController,
	listUserController,
	retrieveUserController,
	updateUserController,
} from "../controllers/users.controller";
import ensureAuthIsValidMiddleware from "../middlewares/ensureAuthIsValid.middleware";
import {
	resetPassword,
	sendEmailResetPassword,
} from "../services/users/resetUserPassword.service";

const usersRoutes: Router = Router();

const sendEmailUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const email = req.body.email;
	sendEmailResetPassword(email);

	return res.status(200).json("Email sent!");
};
const resetUserPassController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const password = req.body.newPass,
		reset_token = req.query.reset_token as string;

	resetPassword(password, reset_token);

	return res.status(200).json("Password changed");
};

usersRoutes.post("", validateData(userSchemaRequest), createUserController);
usersRoutes.post("/sendemail", sendEmailUserController);
usersRoutes.post("/resetpassword", resetUserPassController);
usersRoutes.get("", listUserController);
usersRoutes.get("/:id", ensureAuthIsValidMiddleware, retrieveUserController);
usersRoutes.delete("/:id", ensureAuthIsValidMiddleware, deleteUserController);
usersRoutes.patch("/:id", ensureAuthIsValidMiddleware, updateUserController);

export default usersRoutes;

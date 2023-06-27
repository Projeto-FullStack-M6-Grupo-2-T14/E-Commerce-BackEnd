import { Request, Response } from "express";
import { createUserServices } from "../services/users/createUser.service";
import { listUserServices } from "../services/users/listUsers.service";
import { deleteUserServices } from "../services/users/deleteUser.service";
import { updateUserServices } from "../services/users/updateUser.service";
import { TUserPartial, TUserRequest } from "../interfaces/users.interface";
import { retrieveUserServices } from "../services/users/retrieveUser.service";
import {
	resetPassword,
	sendEmailResetPassword,
} from "../services/users/resetUserPassword.service";

const createUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: TUserRequest = req.body;
	const newUser = await createUserServices(userData);

	return res.status(201).json(newUser);
};

const listUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const users = await listUserServices();

	return res.json(users);
};

const updateUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userData: TUserPartial = req.body;
	const userId: number = parseInt(req.params.id);

	const updateUser = await updateUserServices(userData, userId);

	return res.status(200).json(updateUser);
};

const deleteUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	await deleteUserServices(userId);

	return res.status(204).send();
};

const retrieveUserController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);

	const users = await retrieveUserServices(userId);

	return res.json(users);
};

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

export {
	createUserController,
	listUserController,
	deleteUserController,
	updateUserController,
	retrieveUserController,
	sendEmailUserController,
	resetUserPassController,
};

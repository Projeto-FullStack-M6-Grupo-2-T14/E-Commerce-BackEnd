import { Request, Response } from "express";
import { createUserServices } from "../services/users/createUser.service";
import { iEntryUser } from "../interfaces/users.interface";
import { listUserServices } from "../services/users/listUsers.service";
import { deleteUserServices } from "../services/users/deleteUser.service";
import { updateUserServices } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
	const userData: iEntryUser = req.body;
	const newUser = await createUserServices(userData);

	return res.status(201).json(newUser);
};

const listUserController = async (req: Request, res: Response): Promise<Response> => {

	const users = await listUserServices();
  
	return res.json(users);
  
};
  
const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  
	const userData = req.body;
	const userId = parseInt(req.params.id);

	const updateUser = await updateUserServices(userData, userId)
  
	return res.status(200).json(updateUser);
  
};
  
const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  
	const userId = parseInt(req.params.id);

	await deleteUserServices(userId)
  
	return res.status(204).send();
	
};

export { createUserController, listUserController, deleteUserController, updateUserController }


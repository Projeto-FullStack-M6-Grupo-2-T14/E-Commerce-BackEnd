import { Request, Response } from "express";
import { createUserServices } from "../services/users/createUser.service";
import { iEntryUser } from "../interfaces/users.interface";
import { listUserServices } from "../services/users/listUsers.service";
import { deleteUserServices } from "../services/users/deleteUser.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
	const userData: iEntryUser = req.body;
	const newUser = await createUserServices(userData);

	return res.status(201).json(newUser);
};

export const listUserController = async (req: Request, res: Response): Promise<Response> => {

	const users = await listUserServices();
  
	return res.json(users);
  
};
  
export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  
	const userData = req.body;
	const userId = parseInt(req.params.id);  
  
	return res.status(200).json();
  
};
  
export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  
	const userId = parseInt(req.params.id);

	await deleteUserServices(userId)
  
	return res.status(204).send();
	
};


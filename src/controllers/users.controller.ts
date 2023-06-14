import { Request, Response } from "express";
import { createUserServices } from "../services/users/createUser.service";
import { iEntryUser } from "../interfaces/users.interface";

const createUserController = async (req: Request, res: Response): Promise<Response> => {
	const userData: iEntryUser = req.body;
	const newUser = await createUserServices(userData);

	return res.status(201).json(newUser);
};

export { createUserController };
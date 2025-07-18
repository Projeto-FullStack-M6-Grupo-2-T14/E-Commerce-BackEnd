import { Request, Response } from "express";
import { TListPosters } from "../interfaces/posters.interface.js";
import listUserPostersService from "../services/userPosters/listUserPosters.service.js";

const listUserPostersController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(req.params.id);
	const getPosters: TListPosters = await listUserPostersService(userId);

	return res.status(200).json(getPosters);
};

export default listUserPostersController;

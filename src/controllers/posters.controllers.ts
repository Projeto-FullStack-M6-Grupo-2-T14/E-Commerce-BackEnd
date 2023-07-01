import { Request, Response } from "express";
import listAllPostersService from "../services/posters/listAllPosters.service";
import updatePosterService from "../services/posters/updatePoster.service";
import retrievePosterServices from "../services/posters/retrievePoster.service";
import deletePostersService from "../services/posters/deletePoster.service";
import createPosterServices from "../services/posters/createPoster.service";
import { TEntryPoster, TExitPoster, TListPosters, TUpdatePoster, TUpdatePosterResponse } from "../interfaces/posters.interface";

const listAllPostersController = async (req: Request, res: Response): Promise<Response> => {
	const getPosters: TListPosters = await listAllPostersService();

	return res.status(200).json(getPosters);
};

const retrievePosterController = async (req: Request, res: Response): Promise<Response> => {
	const posterId: number = parseInt(req.params.id)
	const poster: TExitPoster = await retrievePosterServices(posterId);

	return res.status(200).json(poster);
};

const deletePostersController = async (req: Request, res: Response): Promise<Response> => {
	const posterId: number = parseInt(req.params.id)

	await deletePostersService(Number(posterId));

	return res.status(204).send();
};

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
	const posterData: TEntryPoster = req.body;
	const userId: number = res.locals.userId
	const newPoster = await createPosterServices(posterData, userId);

	return res.status(201).json(newPoster);
};

const updatePosterController = async (req: Request, res: Response): Promise<Response> => {
	const newPosterData: TUpdatePoster = req.body
	const posterId: number = parseInt(req.params.id)
	const userId: number = res.locals.userId

	const updatedPoster: TUpdatePosterResponse = await updatePosterService(newPosterData, posterId, userId)

	return res.status(200).json(updatedPoster);
};

export {
	listAllPostersController,
	deletePostersController,
	retrievePosterController,
	createPosterController,
	updatePosterController,
};

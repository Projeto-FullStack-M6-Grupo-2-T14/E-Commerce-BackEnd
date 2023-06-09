import { Request, Response } from "express";
import listAllPostersService from "../services/posters/retrieveAllPosters.service";
import { iEntryPoster, iExitPoster, iListPosters } from "../interfaces/posters.interface";
import { deletePostersService } from "../services/posters/deletePoster.service";
import { retrievePosterServices } from "../services/posters/retrievePoster.service";
import { createPosterServices } from "../services/posters/createPoster.service";
import updatePosterService from "../services/posters/updatePoster.service";


const listAllPostersController = async (req: Request, res: Response): Promise<Response> => {
  const getPosters: iListPosters = await listAllPostersService();

  return res.status(200).json(getPosters);
};

const retrievePosterController = async (req: Request, res: Response): Promise<Response> => {
  const posterId = parseInt(req.params.id);
  const poster: iExitPoster = await retrievePosterServices(posterId);

  return res.status(200).json(poster);
};

const deletePostersController = async (req: Request, res: Response): Promise<Response> => {
  const posterId = req.params.id;
  await deletePostersService(Number(posterId));

  return res.status(204).send();
};

const createPosterController = async (req: Request, res: Response): Promise<Response> => {
	const posterData = req.body;
	const newPoster = await createPosterServices(posterData);

	return res.status(201).json(newPoster);
};

const updatePosterController = async (req: Request, res: Response): Promise<Response> => {
  const newPosterData: iEntryPoster = req.body
  const posterId: number = res.locals.id
  const updatedPoster: iExitPoster = await updatePosterService(newPosterData, posterId)

  return res.status(200).json(updatedPoster)
}

export {
  listAllPostersController,
  deletePostersController,
  retrievePosterController,
  createPosterController,
  updatePosterController
};

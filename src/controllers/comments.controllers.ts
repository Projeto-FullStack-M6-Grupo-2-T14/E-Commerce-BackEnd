import { Request, Response } from "express";
import { createCommentService } from "../services/comments/createComment.service.js";
import listCommentsService from "../services/comments/listComment.service.js";
import { TListComments } from "../interfaces/comment.interfaces.js";
import editCommentsService from "../services/comments/editComment.service.js";
import deleteCommentService from "../services/comments/deleteComment.service.js";

const createCommentController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(res.locals.userId);
	const posterId: number = parseInt(req.params.id);
	const commentText: string = req.body.text;

	const newComment = await createCommentService(userId, posterId, commentText);

	return res.status(201).json(newComment);
};

const listCommentController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const posterId: number = parseInt(req.params.id);

	const comments: TListComments = await listCommentsService(posterId);

	return res.status(200).json(comments);
};

const editCommentController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(res.locals.userId);
	const commentId: number = parseInt(req.params.id);
	const commentText = req.body.text;

	const comments = await editCommentsService(userId, commentId, commentText);

	return res.status(200).json(comments);
};

const deleteCommentController = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const userId: number = parseInt(res.locals.userId);
	const commentId: number = parseInt(req.params.id);

	await deleteCommentService(userId, commentId);

	return res.status(204).send();
};

export {
	createCommentController,
	listCommentController,
	editCommentController,
	deleteCommentController,
};

import { Request, Response } from "express"
import { createCommentService } from "../services/comments/createComment.service"
import listCommentsService from "../services/comments/listComment.service"
import { TListComments } from "../interfaces/comment.interfaces"

const createCommentController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(res.locals.userId)
    const posterId: number = parseInt(req.params.id)
    const commentText: string = req.body.text

    const newComment = await createCommentService(userId, posterId, commentText)

    return res.status(201).json(newComment)
}

const listCommentController = async (req: Request, res: Response): Promise<Response> => {

    const posterId: number = parseInt(req.params.id)

    const comments: TListComments = await listCommentsService(posterId)

    return res.status(200).json(comments)

}

export { createCommentController, listCommentController }
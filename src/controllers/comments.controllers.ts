import { Request, Response } from "express"
import { createCommentService } from "../services/comments/createComment.service"


const createCommentController = async (req: Request, res: Response): Promise<Response> => {
    const userId: number = parseInt(res.locals.userId)
    const posterId: number = req.body.posterId
    const commentText: string = req.body.text
    const newComment = await createCommentService(userId, posterId, commentText)

    return res.status(201).json(newComment)
}


export { createCommentController }
import { z } from 'zod'
import { userResponse, userSchemaResponseOnComment } from './users.schema'
import { exitPosterOnComment } from './posters.schema'


const idKey = z.object({
	id: z.number(),
})

const commentSchema = z.object({
    text: z.string().max(600),
    user: userSchemaResponseOnComment,
    posterId: z.number(),
})

const commentSchemaRequest = commentSchema.omit({
    id: true,
    user: true
})

const commentSchemaResponse = idKey.merge(commentSchema).omit({
    posterId: true
}).extend({
    poster: exitPosterOnComment
})

export type TCommentResponse = z.infer<typeof commentSchemaResponse>

const commentSchemaResponseList = z.array(commentSchemaResponse)

export { commentSchema, commentSchemaRequest, commentSchemaResponse, commentSchemaResponseList }
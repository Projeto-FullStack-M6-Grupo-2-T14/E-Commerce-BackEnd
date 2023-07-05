import { z } from 'zod'
import { userSchemaResponseOnComment } from './users.schema'
import { posterSchemaResponseOnComment } from './posters.schema'

const commentSchema = z.object({
    id: z.number(),
    text: z.string().max(600),
    created_at: z.string(),
    user: userSchemaResponseOnComment,
    poster: posterSchemaResponseOnComment
})

const commentSchemaRequest = commentSchema.omit({
    id: true,
    created_at: true,
    user: true,
    poster: true
})

const commentSchemaResponse = commentSchema.omit({
    poster: true
})

const commentSchemaResponseList = z.array(commentSchemaResponse)

export { commentSchema, commentSchemaRequest, commentSchemaResponseList, commentSchemaResponse }
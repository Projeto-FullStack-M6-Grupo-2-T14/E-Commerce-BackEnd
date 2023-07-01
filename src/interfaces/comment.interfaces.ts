import { z } from "zod";
import { commentSchema, commentSchemaResponseList } from "../schemas/comments.schema";

export type TCommentResponse = z.infer<typeof commentSchema>
export type TListComments = z.infer<typeof commentSchemaResponseList>

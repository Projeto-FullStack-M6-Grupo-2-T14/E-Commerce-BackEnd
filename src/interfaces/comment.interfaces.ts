import { z } from "zod";
import {
	commentSchema,
	commentSchemaResponse,
	commentSchemaResponseList,
} from "../schemas/comments.schema.js";

export type TCommentResponse = z.infer<typeof commentSchema>;
export type TUpdateCommentResponse = z.infer<typeof commentSchemaResponse>;
export type TListComments = z.infer<typeof commentSchemaResponseList>;

import { z } from "zod";
import { userResponse } from "./users.schema";

const idKey = z.object({
	id: z.number(),
});

const entryPosterSchema = z.object({
	title: z.string().max(120),
	brand: z.string().max(120),
	model: z.string().max(300),
	year: z.string().max(20),
	fuel: z.string().max(80),
	mileage: z.string().max(20),
	color: z.string().max(120),
	fipe_price: z.string().max(20),
	price: z.string().max(20),
	description: z.string().max(200),
	cover_image: z.string().nullish(),
	is_active: z.boolean().default(false),
});

const updatePosterSchema = entryPosterSchema.partial()

const exitPosterSchema = idKey.merge(entryPosterSchema).extend({
	created_at: z.string(),
	user: userResponse,
});

const updateSchemaResponse = exitPosterSchema.omit({
	user: true,
});

const listAllPostersSchema = z.array(exitPosterSchema);

export { entryPosterSchema, exitPosterSchema, listAllPostersSchema, updateSchemaResponse, updatePosterSchema };

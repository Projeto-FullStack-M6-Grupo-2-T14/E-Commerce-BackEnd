import { z } from "zod";
import { userSchemaResponseOnComment } from "./users.schema";

const posterSchema = z.object({
	id: z.number(),
	title: z.string().max(120),
	brand: z.string().max(120),
	model: z.string().max(300),
	year: z.string(),
	fuel: z.string().max(80),
	mileage: z.string().max(20),
	color: z.string().max(120),
	fipe_price: z.string().max(20),
	price: z.string().max(20),
	description: z.string().max(200),
	cover_image: z.string().nullish(),
	is_active: z.boolean().default(false),
	created_at: z.string(),
	user: userSchemaResponseOnComment
});

const posterSchemaRequest = posterSchema.omit({
	id: true,
	created_at: true,
	user: true
})

const updatePosterSchema = posterSchemaRequest.partial()

const updateSchemaResponse = posterSchema.omit({
	user: true,
});

const listAllPostersSchema = z.array(posterSchema);

const posterSchemaResponseOnComment = posterSchema.omit({
	title: true,
	brand: true,
	model: true,
	year: true,
	fuel: true,
	mileage: true,
	color: true,
	fipe_price: true,
	price: true,
	description: true,
	cover_image: true,
	is_active: true,
	created_at: true,
	user: true
})

export { 
	posterSchema, 
	posterSchemaRequest, 
	posterSchemaResponseOnComment, 
	listAllPostersSchema, 
	updateSchemaResponse, 
	updatePosterSchema 
};

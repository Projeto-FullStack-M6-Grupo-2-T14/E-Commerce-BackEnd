import { z } from "zod";

export const addressSchema = z.object({
	id: z.number(),
	zipcode: z.string().max(8),
	state: z.string().max(80),
	city: z.string().max(120),
	street: z.string().max(150),
	number: z.string().max(8),
	complement: z.string().max(200),
});

export const addressSchemaRequest = addressSchema.omit({
	id: true,
});

export const partialAddressSchema = addressSchemaRequest.partial();

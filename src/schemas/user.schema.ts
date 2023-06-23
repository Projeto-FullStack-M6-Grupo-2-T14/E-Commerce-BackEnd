import { z } from "zod";
import { addressSchemaRequest } from "./address.schema";

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(100),
    email: z.string().max(60),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false),
    address: addressSchemaRequest
});

export const userSchemaRequest = userSchema.omit({
  id: true,
});

export const userSchemaResponse = userSchema.omit({
    password: true,
});

export const userUpdateSchemaRequest = userSchema.omit({
    id: true,
    address: true,
  });
  
export const updateUserSchemaResponse = userSchema.omit({
    password: true,
    address: true
});

export const listUserSchemaResponse = userSchema.omit({
    address: true,
});

export const userSchemaUpdate = listUserSchemaResponse.partial();

export const listAllUsersSchema = listUserSchemaResponse.array()


import { z } from 'zod'

const idKey = z.object({
    id: z.number()
})

const entryAddressSchema = z.object({
    zipcode: z.string().max(8),
    state: z.string().max(80),
    city: z.string().max(120),
    street: z.string().max(150),
    number: z.string().max(8),
    complement: z.string().max(200)
})

const userSchema = z.object({
    name: z.string().max(100),
    email: z.string().max(60),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false)
})

const resultAddressSchema = entryAddressSchema.extend({
    user: idKey.merge(userSchema)
})

const exitAddressSchema = idKey.merge(resultAddressSchema)

const entryUserSchema = z.object({
    name: z.string().max(100),
    email: z.string().max(60),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false),
    address: entryAddressSchema
})

const resultUserSchema = z.object({
    name: z.string().max(100),
    email: z.string().max(60),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false),
    address: idKey.merge(entryAddressSchema)
})

const resultUserOnPostSchema = resultUserSchema.omit({
    address: true,
    password: true
})

const exitUserSchema = idKey.merge(resultUserSchema)

const listAllUsersSchema = z.array(exitUserSchema)

export { entryUserSchema, exitUserSchema, listAllUsersSchema, entryAddressSchema, exitAddressSchema, userSchema, resultAddressSchema, resultUserOnPostSchema }
import { z } from 'zod'

const idKey = z.object({
    id: z.number()
})

const entryUserSchema = z.object({
    name: z.string().max(100),
    email: z.string().max(60),
    password: z.string().max(120),
    cpf: z.string().max(11),
    phone: z.string().max(12),
    birthday: z.string(z.date()),
    description: z.string().max(500),
    is_seller: z.boolean().default(false)
})

const exitUserSchema = idKey.merge(entryUserSchema)

const listAllUsersSchema = z.array(exitUserSchema)

export { entryUserSchema, exitUserSchema, listAllUsersSchema }
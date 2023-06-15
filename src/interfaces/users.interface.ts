import { z } from 'zod'
import { entryUserSchema, exitUserSchema, listAllUsersSchema } from '../schemas/users.schema'
import { DeepPartial } from 'typeorm'

type iEntryUser = z.infer<typeof entryUserSchema>
type iExitUser = z.infer<typeof exitUserSchema>
type iUpdateUser = DeepPartial<z.infer<typeof entryUserSchema>>
type iListUsers = z.infer<typeof listAllUsersSchema>

export { iEntryUser, iExitUser, iUpdateUser, iListUsers }
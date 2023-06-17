import { z } from 'zod'
import { entryAddressSchema, entryUserSchema, exitAddressSchema, exitUserSchema, listAllUsersSchema, resultAddressSchema, userSchema } from '../schemas/users.schema'
import { DeepPartial } from 'typeorm'

type iUser = z.infer<typeof userSchema>
type iAddress = z.infer<typeof entryAddressSchema>
type iResultAddress = z.infer<typeof resultAddressSchema>
type iExitAddress = z.infer<typeof exitAddressSchema>
type iEntryUser = z.infer<typeof entryUserSchema>
type iExitUser = z.infer<typeof exitUserSchema>
type iUpdateUser = DeepPartial<z.infer<typeof entryUserSchema>>
type iListUsers = z.infer<typeof listAllUsersSchema>

export { iEntryUser, iExitUser, iUpdateUser, iListUsers, iUser, iAddress, iExitAddress, iResultAddress }
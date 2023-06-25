import { z } from 'zod'
import { DeepPartial } from 'typeorm'
import { 
    entryAddressSchema, 
    entryUserSchema, 
    exitAddressSchema, 
    exitUserSchema, 
    listAllUsersSchema, 
    resultAddressSchema, 
    resultUserOnPostSchema, 
    returnAddressSchema, 
    userSchema 
} from '../schemas/users.schema'

type iUser = z.infer<typeof userSchema>
type iAddress = z.infer<typeof entryAddressSchema>
type iResultAddress = z.infer<typeof resultAddressSchema>
type iExitAddress = z.infer<typeof exitAddressSchema>
type iEntryUser = z.infer<typeof entryUserSchema>
type iExitUser = z.infer<typeof exitUserSchema>
type iUpdateUser = DeepPartial<z.infer<typeof userSchema>>
type iListUsers = z.infer<typeof listAllUsersSchema>
type iUserResponse = z.infer<typeof resultUserOnPostSchema>
type iUpdateAddress = DeepPartial<z.infer<typeof entryAddressSchema>>
type iAddressResponse = z.infer<typeof returnAddressSchema>



export { 
    iEntryUser, 
    iExitUser, 
    iUpdateUser, 
    iListUsers, 
    iUser, 
    iAddress, 
    iExitAddress, 
    iResultAddress, 
    iUserResponse, 
    iUpdateAddress,
    iAddressResponse
}
import { DeepPartial } from "typeorm"
import { z } from "zod"
import { addressSchema, addressSchemaRequest } from "../schemas/address.schema"

export type TAddressResponse = z.infer<typeof addressSchema>
export type TAddressrequest = z.infer<typeof addressSchemaRequest>
export type TUpdateAddress = DeepPartial<z.infer<typeof addressSchemaRequest>>
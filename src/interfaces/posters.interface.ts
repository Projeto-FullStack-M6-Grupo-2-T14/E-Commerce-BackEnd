import { z } from 'zod'
import { listAllPostersSchema, posterSchema, posterSchemaRequest, updateSchemaResponse } from '../schemas/posters.schema'
import { DeepPartial } from 'typeorm'

export type TEntryPoster = z.infer<typeof posterSchemaRequest>
export type TExitPoster = z.infer<typeof posterSchema>
export type TUpdatePoster = DeepPartial<z.infer<typeof posterSchemaRequest>>
export type TListPosters = z.infer<typeof listAllPostersSchema>
export type TUpdatePosterResponse = z.infer<typeof updateSchemaResponse>




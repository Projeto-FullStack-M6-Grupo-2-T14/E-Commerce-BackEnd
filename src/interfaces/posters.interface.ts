import { z } from 'zod'
import { entryPosterSchema, exitPosterSchema, listAllPostersSchema } from '../schemas/posters.schema'
import { DeepPartial } from 'typeorm'

export type TEntryPoster = z.infer<typeof entryPosterSchema>
export type TExitPoster = z.infer<typeof exitPosterSchema>
export type TUpdatePoster = DeepPartial<z.infer<typeof entryPosterSchema>>
export type TListPosters = z.infer<typeof listAllPostersSchema>



import { z } from 'zod'
import { entryPosterSchema, exitPosterSchema, listAllPostersSchema } from '../schemas/posters.schema'
import { DeepPartial } from 'typeorm'

type iEntryPoster = z.infer<typeof entryPosterSchema>
type iExitPoster = z.infer<typeof exitPosterSchema>
type iUpdatePoster = DeepPartial<z.infer<typeof entryPosterSchema>>
type iListPosters = z.infer<typeof listAllPostersSchema>

export { iEntryPoster, iExitPoster, iUpdatePoster, iListPosters }
import { z } from 'zod'
import { entryPosterSchema, exitPosterSchema } from '../schemas/posters.schema'
import { DeepPartial } from 'typeorm'

type iEntryPoster = z.infer<typeof entryPosterSchema>
type iExitPoster = z.infer<typeof exitPosterSchema>
type iUpdatePoster = DeepPartial<z.infer<typeof entryPosterSchema>> 

export { iEntryPoster, iExitPoster, iUpdatePoster }
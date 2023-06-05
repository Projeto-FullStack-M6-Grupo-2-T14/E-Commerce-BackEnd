import { z } from 'zod'
import { entryPosterSchema, exitPosterSchema } from '../schemas/posters.schema'

type iEntryPoster = z.infer<typeof entryPosterSchema>
type iExitPoster = z.infer<typeof exitPosterSchema>

export { iEntryPoster, iExitPoster }
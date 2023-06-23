import { z } from 'zod'
import { entryPosterSchema, exitPosterSchema, listAllPostersSchema } from '../schemas/posters.schema'
import { DeepPartial } from 'typeorm'

type TEntryPoster = z.infer<typeof entryPosterSchema>
type TExitPoster = z.infer<typeof exitPosterSchema>
type TUpdatePoster = DeepPartial<z.infer<typeof entryPosterSchema>>
type TListPosters = z.infer<typeof listAllPostersSchema>


export { TEntryPoster, TExitPoster, TUpdatePoster, TListPosters }
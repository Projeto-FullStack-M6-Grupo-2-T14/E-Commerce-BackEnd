import { Request, Response, NextFunction } from 'express'
import { ZodTypeAny } from 'zod'

const validateData = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    // console.log(req.body)
    const validatedData = schema.parse(req.body)
    req.body = validatedData
    console.log('vd')

    return next()
}

export default validateData
import {
    Request,
    Response
} from 'express'
import { generateTokenService } from '../services/login/generateToken.service'


const generateTokenController = async ( req: Request, res: Response ) => {
    const { email, password } = req.body
    const token = await generateTokenService({email, password})

    return res.json({token})
}


export { generateTokenController }
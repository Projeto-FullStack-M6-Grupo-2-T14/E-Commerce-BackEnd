import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const ensureAuthIsValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers.authorization
    
    if (!token) {
        return res.status(401).json({ message: 'Invalid token.' })
    }

    const splitToken: string | undefined = token.split(' ')[1]

    jwt.verify(splitToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            return res.status(401).json({ message: 'Invalid token.' })
        }

        res.locals.userId = parseInt(decoded.sub)

			return next();
		}
	);
};

export default ensureAuthIsValidMiddleware;

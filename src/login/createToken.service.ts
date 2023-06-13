import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities/users.entity'
import { AppError } from '../error'
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'


const createTokenService = async ({email, password}: any): Promise<string> => {
    const usersRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await usersRepository.findOne({
        where: {
            email
        }
    })
    if (!user) {
        throw new AppError('Invalid credentials', 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError('Invalid credentials', 403)
    }

    const token = jwt.sign(
        {userName: user.name},
        process.env.SECRET_KEY!,
        {
            expiresIn: '1h',
            subject: String(user.id)
        }
    )
    return token
}


export { createTokenService }
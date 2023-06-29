import { Repository } from "typeorm"
import { Comment, Poster, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { userSchema, userSchemaResponseOnComment } from "../../schemas/users.schema"
import { exitPosterOnComment } from "../../schemas/posters.schema"
import { commentSchemaResponse } from "../../schemas/comments.schema"


const createCommentService = async (userId: number, posterId: number, commentText: string) => {
    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)
    const user: User | null = await userRepository.findOneBy({
        id: userId
    })
    const returnUser = userSchemaResponseOnComment.parse(user)
    const poster: Poster | null = await posterRepository.findOneBy({
        id: posterId
    })
    const returnPoster = exitPosterOnComment.parse(poster)
    const comment = commentRepository.create({
        text: commentText,
        user: returnUser,
        poster: returnPoster,
    })
    await commentRepository.save(comment)
    return comment
}

export { createCommentService }
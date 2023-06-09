import { Repository } from "typeorm";
import { Comment, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TUpdateCommentResponse } from "../../interfaces/comment.interfaces";
import { AppError } from "../../error";
import { commentSchemaResponse } from "../../schemas/comments.schema";

const editCommentsService = async (userId: number, commentId: number, commentText: string): Promise<TUpdateCommentResponse> => {
    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment);
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
  
    const comment = await commentRepository
    .createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .where('comment.id = :commentId', { commentId })
    .getOne();

    if (!comment) {
        throw new AppError('Comment not found', 404);
    }
      
    const user = await userRepository.findOneBy({ id: userId });
    if (!user) {
        throw new AppError('User not found', 404);
    }

    if (comment.user.id !== userId) {
        throw new AppError('Unauthorized', 401);
    }

    comment.text = commentText;
    comment.user = user;

    await commentRepository.update(commentId, comment);

    return commentSchemaResponse.parse(comment)  

};

  export default editCommentsService
  
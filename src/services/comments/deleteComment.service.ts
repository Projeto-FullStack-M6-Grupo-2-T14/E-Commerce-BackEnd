import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities";
import { AppError } from "../../error";

const deleteCommentService = async (userId: number, commentId: number): Promise<void> => {
    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment);
  
    const comment = await commentRepository
    .createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .where('comment.id = :commentId', { commentId })
    .getOne();

    if (!comment) {
      throw new AppError('Comment not found', 404);
    }

    if (comment.user.id !== userId) {
        throw new AppError('Unauthorized', 401);
    }
  
    await commentRepository.remove(comment);
};

export default deleteCommentService
  
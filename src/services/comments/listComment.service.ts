import { Repository } from 'typeorm';
import { Comment, Poster } from '../../entities';
import { AppDataSource } from '../../data-source';
import { TListComments } from '../../interfaces/comment.interfaces';
import { commentSchemaResponseList } from '../../schemas/comments.schema';
import { AppError } from '../../error';

const listCommentsService = async (posterId: number): Promise<TListComments> => {

    const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment)
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster)

    const poster = await posterRepository.findOneBy({ id: posterId });
    if (!poster) {
        throw new AppError('Poster not found', 404);
    }

    const comments: Comment[] = await commentRepository
    .createQueryBuilder('comment')
    .leftJoinAndSelect('comment.user', 'user')
    .where('comment.posterId = :posterId', { posterId })
    .getMany();

    const returnComments: TListComments = commentSchemaResponseList.parse(comments);

    return returnComments;
};

export default listCommentsService;

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { TListComments } from "../../interfaces/comment.interfaces.js";
import { commentSchemaResponseList } from "../../schemas/comments.schema.js";
import { AppError } from "../../error.js";
import { Comment } from "../../entities/comment.entity.js";
import { Poster } from "../../entities/posters.entity.js";

const listCommentsService = async (
	posterId: number
): Promise<TListComments> => {
	const commentRepository: Repository<Comment> =
		AppDataSource.getRepository(Comment);
	const posterRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const poster = await posterRepository.findOneBy({ id: posterId });
	if (!poster) {
		throw new AppError("Poster not found", 404);
	}

	const comments: Comment[] = await commentRepository
		.createQueryBuilder("comment")
		.leftJoinAndSelect("comment.user", "user")
		.where("comment.posterId = :posterId", { posterId })
		.getMany();

	const returnComments: TListComments =
		commentSchemaResponseList.parse(comments);

	return returnComments;
};

export default listCommentsService;

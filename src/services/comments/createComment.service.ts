import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { AppError } from "../../error.js";
import { commentSchema } from "../../schemas/comments.schema.js";
import { TCommentResponse } from "../../interfaces/comment.interfaces.js";
import { Poster } from "../../entities/posters.entity.js";
import { User } from "../../entities/users.entity.js";
import { Comment } from "../../entities/comment.entity.js";

const createCommentService = async (
	userId: number,
	posterId: number,
	commentText: string
): Promise<TCommentResponse> => {
	const commentRepository: Repository<Comment> =
		AppDataSource.getRepository(Comment);
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const posterRepository: Repository<Poster> =
		AppDataSource.getRepository(Poster);

	const user = await userRepository.findOneBy({ id: userId });
	if (!user) {
		throw new AppError("User not found", 404);
	}

	const poster = await posterRepository.findOneBy({ id: posterId });
	if (!poster) {
		throw new AppError("Poster not found", 404);
	}
	const newComment = new Comment();
	newComment.text = commentText;
	newComment.user = user;
	newComment.poster = poster;

	await commentRepository.save(newComment);

	return commentSchema.parse(newComment);
};

export { createCommentService };

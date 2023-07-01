import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Poster } from "../../entities";
import { AppError } from "../../error";


const retrievePosterServices = async (posterId: number) => {
    const posterRepository: Repository<Poster> = AppDataSource.getRepository(Poster);

    const poster: Poster | null = await posterRepository
    .createQueryBuilder("poster")
    .leftJoinAndSelect("poster.user", "user")
    .leftJoinAndSelect("poster.comments", "comments")
    .leftJoin("comments.user", "commentUser")
    .select([
        "poster",
        "user.id",
        "user.name",
        "comments.id",
        "comments.text",
        "commentUser.id",
        "commentUser.name"
    ])
    .where("poster.id = :id", { id: posterId })
    .getOne();

    if(!poster) {
        throw new AppError('Poster not found', 404)
    }

    return poster
}

export default retrievePosterServices
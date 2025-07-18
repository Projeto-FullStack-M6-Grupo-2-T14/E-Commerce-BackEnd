import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./users.entity.js";
import { Poster } from "./posters.entity.js";

@Entity("Comment")
class Comment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 600 })
    text: string;

    @CreateDateColumn({ type: "date" })
    created_at: string;

    @ManyToOne('User', (user: User) => user.comments)
    user: User;

    @ManyToOne('Poster', (poster: Poster) => poster.comments, { onDelete: "CASCADE" })
    poster: Poster;
}

export { Comment };
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { User } from "./users.entity.js";
import { Comment } from "./comment.entity.js";

@Entity("posters")
class Poster {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: 'varchar', length: 120 })
    title: string;

    @Column({ type: 'varchar', length: 120 })
    brand: string;

    @Column({ type: 'varchar', length: 300 })
    model: string;

    @Column({ type: 'varchar', length: 4, nullable: true })
    year: string;

    @Column({ type: 'varchar', length: 80 })
    fuel: string;

    @Column({ type: 'varchar', length: 20 })
    mileage: string;

    @Column({ type: 'varchar', length: 120 })
    color: string;

    @Column({ type: 'varchar', length: 20 })
    fipe_price: string;

    @Column({ type: 'varchar', length: 20 })
    price: string;

    @Column({ type: 'text' })
    description: string;

    @Column({ type: 'varchar', nullable: true })
    cover_image: string;

    @Column({ type: "boolean", default: false })
    is_active: boolean;

    @CreateDateColumn({ type: "date" })
    created_at: string;

    @ManyToOne('User', (user: User) => user.poster, { onDelete: "CASCADE" })
    user: User;

    @OneToMany('Comment', (comment: Comment) => comment.poster)
    comments: Comment[];
}

export { Poster };
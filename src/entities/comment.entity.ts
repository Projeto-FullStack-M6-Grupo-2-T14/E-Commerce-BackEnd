import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./users.entity";
import { Poster } from "./posters.entity";


@Entity('Comment')
class Comment {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type: "varchar", length: 600})
    text: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => Poster, { onDelete: "CASCADE" })
    poster: Poster

}


export { Comment }
// src/entities/users.entity.ts
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import { Poster } from "./posters.entity.js";
import { Comment } from "./comment.entity.js";
import { Address } from "./address.entity.js";

@Entity("users")
class User {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ type: "varchar", length: 100 })
	name: string;

	@Column({ type: "varchar", length: 60, unique: true })
	email: string;

	@Column({ type: "varchar", length: 120 })
	password: string;

	@Column({ type: "varchar", length: 11, unique: true })
	cpf: string;

	@Column({ type: "varchar", length: 12 })
	phone: string;

	@Column({ type: "date" })
	birthday: string;

	@Column({ type: "text" })
	description: string;

	@Column({ type: "boolean", default: false })
	is_seller: boolean;

	@Column({ type: "varchar", nullable: true })
	reset_password: string | null;

	@OneToMany("Poster", (poster: Poster) => poster.user)
	poster: Poster[];

	@OneToMany("Comment", (comment: Comment) => comment.user)
	comments: Comment[];

	@OneToOne("Address", (address: Address) => address.user)
	address: Address;

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = bcrypt.getRounds(this.password);
		if (!isEncrypted) {
			this.password = bcrypt.hashSync(this.password, 10);
		}
	}
}

export { User };

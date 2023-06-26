import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany,	PrimaryGeneratedColumn } from "typeorm";
import { Poster } from "./posters.entity";
import { getRounds, hashSync } from "bcryptjs";

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

	@Column({ length: 11, unique: true })
	cpf: string;

	@Column({ type: "varchar", length: 12 })
	phone: string;

	@Column({ type: "date" })
	birthday: string;

	@Column({ length: 500 })
	description: string;

	@Column({ default: false })
	is_seller: boolean;

	@Column({ nullable: true })
	reset_password: string;

	@OneToMany(() => Poster, (poster) => poster.user)
	poster: Poster[];

	@BeforeInsert()
	@BeforeUpdate()
	hashPassword() {
		const isEncrypted = getRounds(this.password);
		if (!isEncrypted) {
			this.password = hashSync(this.password, 10);
		}
	}
}

export { User };

import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { User } from "./users.entity.js";

@Entity("adresses")
class Address {
	@PrimaryGeneratedColumn("increment")
	id: number;

	@Column({ type: "varchar", length: 8 })
	zipcode: string;

	@Column({ type: "varchar", length: 80 })
	state: string;

	@Column({ type: "varchar", length: 120 })
	city: string;

	@Column({ type: "varchar", length: 150 })
	street: string;

	@Column({ type: "varchar", length: 8 })
	number: string;

	@Column({ type: "varchar", length: 200 })
	complement: string;

	@OneToOne("User", { onDelete: "CASCADE" })
	@JoinColumn()
	user: User;
}

export { Address };

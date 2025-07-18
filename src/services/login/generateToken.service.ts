import jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source.js";
import { User } from "../../entities.js";
import { AppError } from "../../error.js";

interface IGenerateToken {
	email: string;
	password: string;
}

const generateTokenService = async ({
	email,
	password,
}: IGenerateToken): Promise<string> => {
	const usersRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await usersRepository.findOne({
		where: {
			email,
		},
	});
	if (!user) {
		throw new AppError("Invalid credentials", 403);
	}

	const passwordMatch = await compare(password, user.password);

	if (!passwordMatch) {
		throw new AppError("Invalid credentials", 403);
	}

	const token = jwt.sign(
		{
			id: user.id,
			name: user.name,
			email: user.email,
			is_seller: user.is_seller,
			description: user.description,
		},
		process.env.SECRET_KEY!,
		{
			expiresIn: "1h",
			subject: String(user.id),
		}
	);
	return token;
};

export { generateTokenService };

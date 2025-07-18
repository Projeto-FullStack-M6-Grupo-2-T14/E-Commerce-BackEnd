import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js"; 
import { AppError } from "../../error.js";
import { randomUUID } from "crypto";
import bcryptjs from "bcryptjs";
import {
	resetPasswordTemplate,
	sendEmail,
} from "../../utils/sendEmail.utils.js";
import { User } from "../../entities/users.entity.js";

const sendEmailResetPassword = async (email: string) => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOne({
		where: { email },
	});

	if (!user) {
		throw new AppError("user not found", 404);
	}

	const resetToken = randomUUID();

	await userRepository.update(
		{
			email: email,
		},
		{
			reset_password: resetToken,
		}
	);

	const resetPassTemplate = resetPasswordTemplate(user.name, email, resetToken);

	await sendEmail(resetPassTemplate);
};

const resetPassword = async (password: string, resetToken: string) => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);

	const user = await userRepository.findOne({
		where: {
			reset_password: resetToken,
		},
	});

	if (!user) {
		throw new AppError("user not found", 404);
	}

	await userRepository.update(
		{
			id: user.id,
		},
		{
			password: bcryptjs.hashSync(password, 10),
			reset_password: null,
		}
	);
};

export { sendEmailResetPassword, resetPassword };

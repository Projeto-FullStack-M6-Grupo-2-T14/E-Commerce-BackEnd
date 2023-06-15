import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/index";
import { iEntryUser, iExitUser } from "../../interfaces/users.interface";
import { AppError } from "../../error";
import { exitUserSchema } from "../../schemas/users.schema";

export const createUserServices = async (payload: iEntryUser): Promise<iExitUser> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const user: iEntryUser = userRepository.create(payload);

	const checkEmailExists: boolean = await userRepository.exist({ where: { email: payload.email } })
	const checkCpfExists: boolean = await userRepository.exist({ where: { cpf: payload.cpf } })

    if(checkEmailExists){
        throw new AppError('Email already exists', 409)
    }

    if(checkCpfExists){
        throw new AppError('CPF already exists', 409)
    }
	
	await userRepository.save(user);

	const userReturn: iExitUser = exitUserSchema.parse(user)

	return userReturn;
};
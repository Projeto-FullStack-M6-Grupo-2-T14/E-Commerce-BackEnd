import { DeepPartial, Repository } from "typeorm";
import { AppDataSource } from "../../data-source.js";
import { Address, User } from "../../entities/index.js";
import { AppError } from "../../error.js";
import {
	TUserRequest,
	TUserResponse,
} from "../../interfaces/users.interface.js";
import { userSchemaResponse } from "../../schemas/users.schema.js";

export const createUserServices = async (
	payload: TUserRequest
): Promise<TUserResponse> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
	const addressRepository: Repository<Address> =
		AppDataSource.getRepository(Address);

	const checkEmailExists: boolean = await userRepository.exist({
		where: { email: payload.email },
	});
	if (checkEmailExists) {
		throw new AppError("Email already exists", 409);
	}

	const checkCpfExists: boolean = await userRepository.exist({
		where: { cpf: payload.cpf },
	});
	if (checkCpfExists) {
		throw new AppError("CPF already exists", 409);
	}

	const { address, ...userData } = payload;
	const user: User = userRepository.create(userData);
	await userRepository.save(user);

	const addressData: DeepPartial<Address> = address;
	addressData.user = user;
	const userAddress: Address = addressRepository.create(addressData);
	await addressRepository.save(userAddress);

	const userResponseData: TUserResponse = userSchemaResponse.parse({
		...user,
		address: userAddress,
	});

	return userResponseData;
};

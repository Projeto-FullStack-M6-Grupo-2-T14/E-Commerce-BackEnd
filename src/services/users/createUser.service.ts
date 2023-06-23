import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, User } from "../../entities/index";
import { AppError } from "../../error";
import { entryAddressSchema, exitUserSchema, resultAddressSchema, userSchema } from "../../schemas/users.schema";
import { TUserRequest, TUserResponse } from "../../schemas/user.schema";
import { TAddressrequest } from "../../schemas/address.schema";

export const createUserServices = async (payload: TUserRequest): Promise<TUserResponse> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
    
    const addressData: TAddressrequest = entryAddressSchema.parse(payload.address);
    const userData = userSchema.parse(payload);
    const user = userRepository.create(userData);

	const checkEmailExists: boolean = await userRepository.exist({ where: { email: payload.email } })
	const checkCpfExists: boolean = await userRepository.exist({ where: { cpf: payload.cpf } })

    if(checkEmailExists){
        throw new AppError('Email already exists', 409)
    }

    if(checkCpfExists){
        throw new AppError('CPF already exists', 409)
    }
	
	await userRepository.save(user);

    const addressParse = resultAddressSchema.parse({
        ...addressData,
        user: user
    })
    const address = addressRepository.create(addressParse);

    await addressRepository.save(address);

	const userReturn: TUserResponse = exitUserSchema.parse({
        ...user,
        address: address
    })

	return userReturn;
};
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address, User } from "../../entities/index";
import { iAddress, iEntryUser, iExitAddress, iExitUser, iResultAddress, iUser } from "../../interfaces/users.interface";
import { AppError } from "../../error";
import { entryAddressSchema, exitUserSchema, resultAddressSchema, userSchema } from "../../schemas/users.schema";

export const createUserServices = async (payload: iEntryUser): Promise<iExitUser> => {
	const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
    const addressData: iAddress = entryAddressSchema.parse(payload.address);
    const userData: iUser = userSchema.parse(payload);
    const user: iUser = userRepository.create(userData);

	const checkEmailExists: boolean = await userRepository.exist({ where: { email: payload.email } })
	const checkCpfExists: boolean = await userRepository.exist({ where: { cpf: payload.cpf } })

    if(checkEmailExists){
        throw new AppError('Email already exists', 409)
    }

    if(checkCpfExists){
        throw new AppError('CPF already exists', 409)
    }
	
	await userRepository.save(user);

    const addressParse: iResultAddress = resultAddressSchema.parse({
        ...addressData,
        user: user
    })
    const address: iExitAddress = addressRepository.create(addressParse);
    await addressRepository.save(address);

	const userReturn: iExitUser = exitUserSchema.parse({
        ...user,
        address: address
    })

	return userReturn;
};
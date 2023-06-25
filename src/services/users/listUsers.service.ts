import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { listAllUsersSchema } from "../../schemas/users.schema";
import { iListUsers } from "../../interfaces/users.interface";

export const listUserServices = async (): Promise<iListUsers> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const findUsers: Array<User> = await userRepository.find();
  
    const users = listAllUsersSchema.parse(findUsers);
  
    return users;
    
};
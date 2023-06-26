import { listAllUsersSchema } from './../../schemas/user.schema';
import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TListUsers } from '../../interfaces/users.interface';

export const listUserServices = async (): Promise<TListUsers> => {

    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const findUsers: Array<User> = await userRepository.find();
  
    const users = listAllUsersSchema.parse(findUsers);
  
    return users;
    
};
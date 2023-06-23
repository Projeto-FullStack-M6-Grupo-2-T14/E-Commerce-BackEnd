import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iUpdateUser, iUserResponse } from "../../interfaces/users.interface";
import { resultUserOnPostSchema } from "../../schemas/users.schema";
import { AppError } from "../../error";

export const updateUserServices = async (payload: iUpdateUser, userId: number): Promise<iUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
  
    const user: User | null = await userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new AppError("User not found", 404);
    }
  
    const newUserData = {
      ...user,
      ...payload,
    };
  
    await userRepository.save(newUserData);
  
    return resultUserOnPostSchema.parse(newUserData);
  
  };
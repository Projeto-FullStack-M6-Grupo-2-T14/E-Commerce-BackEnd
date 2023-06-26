import { Repository } from "typeorm";
import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { userResponse } from "../../schemas/user.schema";
import { TUpdateUserResponse, TUserPartial } from "../../interfaces/users.interface";

export const updateUserServices = async (payload: TUserPartial, userId: number): Promise<TUpdateUserResponse> => {
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
  
    return userResponse.parse(newUserData);
  
  };
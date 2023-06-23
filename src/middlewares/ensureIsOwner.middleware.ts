import { Repository } from "typeorm";
import { User } from "../entities";
import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const isUserOrOwner = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    
    const paramsId = parseInt(req.params.id);
    const userId = parseInt(res.locals.userId);
  
    const user: User | null = await userRepository.findOneBy({ id: paramsId });
  
    if (!user) {
      throw new AppError("User not found", 404);
    }
  
    if (userId !== paramsId) { 
      throw new AppError("Insufficient permission", 403) 
    }; 
  
    return next();
  };

  export default isUserOrOwner
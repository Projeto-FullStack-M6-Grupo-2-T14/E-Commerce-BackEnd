import { Repository } from "typeorm";
import { Address } from "../../../entities";
import { AppDataSource } from "../../../data-source";
import { iAddressResponse, iUpdateAddress } from "../../../interfaces/users.interface";
import { returnAddressSchema } from "../../../schemas/users.schema";
import { AppError } from "../../../error";

export const updateAddressServices = async (payload: iUpdateAddress, addressId: number): Promise<iAddressResponse> => {
    const addressRepository: Repository<Address> = AppDataSource.getRepository(Address);
  
    const address: Address | null = await addressRepository.findOneBy({ id: addressId });

    if (!address) {
      throw new AppError("Address not found", 404);
    }
  
    const newAddressData = {
      ...address,
      ...payload,
    };
  
    await addressRepository.save(newAddressData);
  
    return returnAddressSchema.parse(newAddressData);
  
  };
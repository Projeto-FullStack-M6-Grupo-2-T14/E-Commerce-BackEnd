import { Repository } from "typeorm";
import { Address } from "../../../entities";
import { AppDataSource } from "../../../data-source";
import { AppError } from "../../../error";
import { TAddressResponse, TUpdateAddress } from "../../../interfaces/address.interfaces";
import { addressSchema } from "../../../schemas/address.schema";

export const updateAddressServices = async (payload: TUpdateAddress, addressId: number ): Promise<TAddressResponse> => {
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
  
    return addressSchema.parse(newAddressData);
  
  };
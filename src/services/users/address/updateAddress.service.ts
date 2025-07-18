import { Repository } from "typeorm";
import { AppDataSource } from "../../../data-source.js";
import { AppError } from "../../../error.js";
import {
	TAddressResponse,
	TUpdateAddress,
} from "../../../interfaces/address.interfaces.js";
import { addressSchema } from "../../../schemas/address.schema.js";
import { Address } from "../../../entities/address.entity.js";

export const updateAddressServices = async (
	payload: TUpdateAddress,
	addressId: number
): Promise<TAddressResponse> => {
	const addressRepository: Repository<Address> =
		AppDataSource.getRepository(Address);

	const address: Address | null = await addressRepository.findOneBy({
		id: addressId,
	});

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

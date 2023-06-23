import { Request, Response } from "express";
import { updateAddressServices } from "../services/users/address/updateAddress.service";


const updateAddressController = async (req: Request, res: Response): Promise<Response> => {
  
	const addressData = req.body;
	const addressId = parseInt(req.params.id);

	const updateAddress = await updateAddressServices(addressData, addressId)
  
	return res.status(200).json(updateAddress);
  
};

export { updateAddressController }

import { ISeller } from "./seller.interface";
import { Seller } from "./seller.model";

const createSeller = async(payload: ISeller):Promise<ISeller | null> => {
  const result  = Seller.create(payload)
  return result
};

export const SellerService = {
  createSeller
}
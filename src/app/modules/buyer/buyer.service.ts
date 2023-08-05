
import { IBuyer } from "./buyer.interface";
import { Buyer } from "./buyer.model";

const createBuyer = async(payload: IBuyer):Promise<IBuyer | null> => {
  const result  = Buyer.create(payload)
  return result
};

export const BuyerService = {
  createBuyer
}
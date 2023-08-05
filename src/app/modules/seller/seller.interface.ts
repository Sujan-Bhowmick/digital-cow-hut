import { Model } from "mongoose";

export type UserName = {
  firstName: string,
  lastName : string
}
export type ISeller = {
  id: string;
  name: UserName;
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type SellerModel = Model<ISeller, Record<string, unknown>>;

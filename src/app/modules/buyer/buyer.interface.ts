import { Model } from "mongoose";

export type UserName = {
  firstName: string,
  lastName : string
}
export type IBuyer = {
  id: string;
  name: UserName;
  phoneNumber: string;
  address: string;
  budget: number;
  income: number;
};

export type BuyerModel = Model<IBuyer, Record<string, unknown>>;

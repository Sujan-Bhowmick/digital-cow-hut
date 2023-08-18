import { Model } from "mongoose";

export type UserName = {
  firstName: string,
  lastName : string
}
export type IAdmin = {
  id: string;
  name: UserName;
  phoneNumber: string;
  address: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

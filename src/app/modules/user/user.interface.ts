import { Model } from "mongoose";

export type IUser = {
  id: string;
  role: string;
  password: string;
  // buyer?: Types.ObjectId | IBuyer;
  // seller?: Types.ObjectId | ISeller;
};

export type UserModel = Model<IUser, Record<string, unknown>>;

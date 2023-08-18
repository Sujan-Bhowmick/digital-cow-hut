import { Model, Types } from "mongoose";
import { IBuyer } from "../buyer/buyer.interface";
import { ISeller } from "../seller/seller.interface";
import { IAdmin } from "../admin/admin.interface";

export type IUser = {
  id: string;
  role: string;
  password: string;
  phoneNumber: string;
  needsPasswordChange: true | false;
  buyer?: Types.ObjectId | IBuyer;
  seller?: Types.ObjectId | ISeller;
  admin?: Types.ObjectId | IAdmin;
};

export type IUserMethods = {
  isUserExist(id: string): Promise<Partial<IUser> | null>
  isPasswordMatched(givenPassword:string, savedPassword: string): Promise<boolean>
}

export type UserModel = {
  isUserExist(id: string):Promise<Pick<IUser, "id" | "password" |"role"| "needsPasswordChange">>
   isPasswordMatched(givenPassword: string, savedPassword:string):Promise<boolean>
} & Model<IUser>


// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

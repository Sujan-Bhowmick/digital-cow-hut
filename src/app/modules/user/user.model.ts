/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import config from "../../../config";
import bcrypt from "bcrypt"

const userSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0
    },
    // phoneNumber: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    needsPasswordChange: {
      type: Boolean,
      default: true
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'Buyer',
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'Seller',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.statics.isUserExist = async function(id: string): Promise<Pick<IUser, 'id' | "password"|"role" |'needsPasswordChange'> | null>{
    const user = await User.findOne({id}, {id:1, password: 1, role: 1, needsPasswordChange: 1})

  return user;
};

userSchema.statics.isPasswordMatched = async function(givenPassword: string, savedPassword: string):Promise<boolean> {
    const isMatch = await bcrypt.compare(givenPassword, savedPassword)

  return isMatch
}

userSchema.pre('save', async function(next){
  const user = this;
  user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));

  next();
})

export const User = model<IUser, UserModel>('User', userSchema);

// userSchema.methods.isUserExist = async function(id: string):Promise<Partial<IUser> | null>{
//   const user = await User.findOne({id}, {id:1, password: 1, needsPasswordChange: 1})

//   return user;
// };

// userSchema.methods.isPasswordMatched = async function (givenPassword: string, savedPassword: string): Promise<boolean> {
//   const isMatch = await bcrypt.compare(givenPassword, savedPassword)

//   return isMatch
// }

import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

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
    },
    // buyer: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Student',
    // },
    // seller: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Faculty',
    // },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, UserModel>('User', userSchema);

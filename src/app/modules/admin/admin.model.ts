import { Schema, model } from "mongoose";
import { AdminModel, IAdmin } from "./admin.interface";
const adminSchema = new Schema<IAdmin, AdminModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true
        },
        lastName: {
          type: String,
          required: true
        }
      }
    },
    phoneNumber: {
      type: String,
      required: true, 
      unique: true
    },
    address: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Admin = model<IAdmin, AdminModel>('Admin', adminSchema);
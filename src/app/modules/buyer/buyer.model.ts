import { Schema, model } from "mongoose";
import { BuyerModel, IBuyer } from "./buyer.interface";
const buyerSchema = new Schema<IBuyer, BuyerModel>(
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
    },
    budget: {
      type: Number,
      required: true
    },
    income: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Buyer = model<IBuyer, BuyerModel>('Buyer', buyerSchema);
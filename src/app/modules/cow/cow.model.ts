import { Schema, model } from 'mongoose'
import { CowModel, ICow } from './cow.interface'

const cowSchema = new Schema<ICow, CowModel>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    // seller: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Seller',
    // },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Cow = model<ICow, CowModel>('Cow', cowSchema)

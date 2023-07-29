import { Model,  } from "mongoose";

export type ICow = {
    name: string;
    age: string;
    price: string;
    location: string;
    breed: string;
    weight: string;
    label: string;
    category: string;
    // seller: Types.ObjectId | ISeller; 
};

export type CowModel = Model<ICow, Record<string, unknown>>;
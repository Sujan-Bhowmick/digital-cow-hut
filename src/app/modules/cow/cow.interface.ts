import { Types } from "mongoose";
import { Model,  } from "mongoose";
import { ISeller } from "../seller/seller.interface";


export type ILocation = "Dhaka"|"Chattogram"|
"Barishal"|
"Rajshahi"|
"Sylhet"|
"Comilla"|
"Rangpur"|
"Mymensingh"

export type IBreed = "Brahman"|
"Nellore"|
"Sahiwal"|
"Gir"|
"Indigenous"|
"Tharparkar"|
"Kankrej"

export type ILabel =  "for-sale"|
"sold-out"

export type ICategory =  "Dairy"|
"Beef"|
"DualPurpose"

export type ICow = {
    name: string;
    age: number;
    price: number;
    location: string;
    breed: string;
    weight: number;
    label: string;
    category: string;
    seller?: Types.ObjectId | ISeller; 
};

export type ICowFilters = {searchTerm?: string} 
export type CowModel = Model<ICow, Record<string, unknown>>;
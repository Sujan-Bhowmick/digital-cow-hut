import {z} from "zod";
const createCowZodSchema = z.object({
  body: z.object({
      name: z.string({
        required_error: "Name is Required"
      }),
      age: z.number({
        required_error: "Phone No is required"
      }),
      price: z.number({
        required_error: "price is required"
      }),
      location: z.string({
        required_error: "Location is required"
      }),
      breed: z.string({
        required_error: "breed is required"
      }),
      weight: z.number({
        required_error: "weight is required"
      }),
      label: z.string({
        required_error: "label is required"
      }),
      category: z.string({
        required_error: "category is required"
      }),
    })
  })

export const cowValidation = {
  createCowZodSchema
}
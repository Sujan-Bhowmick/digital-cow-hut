"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowValidation = void 0;
const zod_1 = require("zod");
const createCowZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is Required"
        }),
        age: zod_1.z.number({
            required_error: "Phone No is required"
        }),
        price: zod_1.z.number({
            required_error: "price is required"
        }),
        location: zod_1.z.string({
            required_error: "Location is required"
        }),
        breed: zod_1.z.string({
            required_error: "breed is required"
        }),
        weight: zod_1.z.number({
            required_error: "weight is required"
        }),
        label: zod_1.z.string({
            required_error: "label is required"
        }),
        category: zod_1.z.string({
            required_error: "category is required"
        }),
    })
});
exports.cowValidation = {
    createCowZodSchema
};

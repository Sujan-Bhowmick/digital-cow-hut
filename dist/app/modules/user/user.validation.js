"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createSellerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        seller: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: "First name is required"
                }),
                lastName: zod_1.z.string({
                    required_error: "Last name is required"
                }),
            }),
            phoneNumber: zod_1.z.string({
                required_error: "Phone No is required"
            }),
            address: zod_1.z.string({
                required_error: "Address is required"
            }),
            budget: zod_1.z.number({
                required_error: "Budget is required"
            }),
            income: zod_1.z.number({
                required_error: "Income is required"
            }),
            seller: zod_1.z.number({
                required_error: "seller is required"
            }),
        })
    })
});
const createBuyerZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        buyer: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: "First name is required"
                }),
                lastName: zod_1.z.string({
                    required_error: "Last name is required"
                }),
            }),
            phoneNumber: zod_1.z.string({
                required_error: "Phone No is required"
            }),
            address: zod_1.z.string({
                required_error: "Address is required"
            }),
            budget: zod_1.z.number({
                required_error: "Budget is required"
            }),
            income: zod_1.z.number({
                required_error: "Income is required"
            }),
        })
    })
});
exports.UserValidation = {
    createSellerZodSchema,
    createBuyerZodSchema
};

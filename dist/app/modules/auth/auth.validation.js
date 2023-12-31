"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = require("zod");
const loginInZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({
            required_error: "Id is Required"
        }),
        password: zod_1.z.string({
            required_error: "Password is Required"
        })
    })
});
const refreshTokenZodSchema = zod_1.z.object({
    cookies: zod_1.z.object({
        refreshToken: zod_1.z.string({
            required_error: "RefreshToken is Required"
        })
    })
});
exports.AuthValidation = {
    loginInZodSchema,
    refreshTokenZodSchema
};

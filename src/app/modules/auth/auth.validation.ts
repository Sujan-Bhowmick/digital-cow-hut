import { z } from "zod";

const loginInZodSchema = z.object({
  body: z.object({
    id : z.string({
      required_error: "Id is Required"
    }),
    password: z.string({
      required_error: "Password is Required"
    })
  })
});
const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken : z.string({
      required_error: "RefreshToken is Required"
    })
  })
});

export const AuthValidation = {
  loginInZodSchema,
  refreshTokenZodSchema
}
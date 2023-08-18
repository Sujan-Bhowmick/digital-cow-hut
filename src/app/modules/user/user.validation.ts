import {z} from 'zod';

const createSellerZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    seller:z.object({
      name: z.object({
        firstName: z.string({
          required_error: "First name is required"
        }),
        lastName: z.string({
          required_error: "Last name is required"
        }),
      }),
      phoneNumber: z.string({
        required_error: "Phone No is required"
      }),
      address: z.string({
        required_error: "Address is required"
      }),
      budget: z.number({
        required_error: "Budget is required"
      }),
      income: z.number({
        required_error: "Income is required"
      })
    })
  })
});
const createBuyerZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    buyer:z.object({
      name: z.object({
        firstName: z.string({
          required_error: "First name is required"
        }),
        lastName: z.string({
          required_error: "Last name is required"
        }),
      }),
      phoneNumber: z.string({
        required_error: "Phone No is required"
      }),
      address: z.string({
        required_error: "Address is required"
      }),
      budget: z.number({
        required_error: "Budget is required"
      }),
      income: z.number({
        required_error: "Income is required"
      }),
    })
  })
});
const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin:z.object({
      name: z.object({
        firstName: z.string({
          required_error: "First name is required"
        }),
        lastName: z.string({
          required_error: "Last name is required"
        }),
      }),
      phoneNumber: z.string({
        required_error: "Phone No is required"
      }),
      address: z.string({
        required_error: "Address is required"
      })
    })
  })
});

export const UserValidation = {
  createSellerZodSchema,
  createAdminZodSchema,
  createBuyerZodSchema
}


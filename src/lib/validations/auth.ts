import * as z from "zod";

export const signInSchema = z.object({
  email: z
    .string({
      required_error: "Email is Required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  password: z
    .string({
      required_error: "Password is Required",
    })
    .min(6, { message: "Password must be atleast 6 characters" })
    .max(32, "Password must be less than 32 characters"),
});

export type signInSchemaType = z.infer<typeof signInSchema>;

export const signUpSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is Required",
      })
      .email({
        message: "Please enter a valid email address",
      }),
    password: z
      .string()
      .min(6, { message: "Password must be atleast 6 characters" })
      .max(32, "Password must be less than 32 characters"),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export type signUpSchemaType = z.infer<typeof signUpSchema>;

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is Required",
    })
    .email({
      message: "Please enter a valid email address",
    }),
});

export type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

export const userAccountSchema = z.object({
  displayName: z
    .string({
      required_error: "Display Name is Required",
    })
    .min(3, { message: "Display Name must be atleast 3 characters" })
    .max(10, "Display Name must be less than 10 characters"),
});

export type userAccountSchemaType = z.infer<typeof userAccountSchema>;

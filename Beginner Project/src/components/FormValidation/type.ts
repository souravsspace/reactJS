import z from "zod"

export const FormSchema = z.object({
  // firstName: z
  //   .string()
  //   .min(2, { message: "Enter a valid first name" })
  //   .max(20, { message: "Enter a valid first name" })
  //   .nonempty(),
  // lastName: z
  //   .string()
  //   .min(2, { message: "Enter a valid last name" })
  //   .max(20, { message: "Enter a valid last name" })
  //   .nonempty(),
  // age: z
  //   .number()
  //   .min(18, { message: "Age must be greater than 18" })
  //   .max(100, { message: "Age must be below 100" }),

  address: z
    .string()
    .min(2, { message: "Enter a valid address" })
    .max(100, { message: "Enter a valid address" })
    .nonempty(),
  state: z
    .string()
    .min(2, { message: "Enter a valid state" })
    .max(20, { message: "Enter a valid state" })
    .nonempty(),
  zip: z
    .string()
    .min(3, { message: "Enter a valid zip" })
    .max(10, { message: "Enter a valid zip" })
    .nonempty(),
  country: z
    .string()
    .min(2, { message: "Enter a valid country" })
    .max(20, { message: "Enter a valid country" })
    .nonempty(),

  email: z.string().email({ message: "Enter a valid email" }).nonempty(),
  password: z
    .string()
    .min(6, { message: "Password must be min of 6 characters" })
    .max(100, { message: "Password must be max of 20 characters" }),
  confirmPassword: z.string().min(6).max(100),
})


export const INIT_STATE = {
  firstName: "",
  lastName: "",
  age: "",
  address: "",
  state: "",
  zip: "",
  country: "",
  email: "",
  password: "",
  confirmPassword: "",
}

export type USERS_PROPS_TYPE = {
  updateFields: (field: Partial<typeof INIT_STATE>) => void
} & Partial<typeof INIT_STATE>

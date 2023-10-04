import z from "zod"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import FormValLayout from "./FormValLayout"
import { USERS_PROPS_TYPE } from "./type"

const scheme = z.object({
  firstName: z
    .string()
    .min(2, { message: "Enter a valid first name" })
    .max(20, { message: "Enter a valid first name" })
    .nonempty(),
  lastName: z
    .string()
    .min(2, { message: "Enter a valid last name" })
    .max(20, { message: "Enter a valid last name" })
    .nonempty(),
  age: z
    .number()
    .min(18, { message: "Age must be greater than 18" })
    .max(100, { message: "Age must be below 100" }),
})

export default function UserDetails({
  updateFields,
  firstName,
  lastName,
  age,
}: USERS_PROPS_TYPE) {
  return (
    <FormValLayout>
      <Label>First Name</Label>
      <Input
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
        required
      />
      <Label>Last Name</Label>
      <Input
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
        required
      />
      <Label>Age</Label>
      <Input
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
        required
      />
    </FormValLayout>
  )
}

import { Label } from "@radix-ui/react-dropdown-menu"
import { Input } from "../ui/input"
import { USERS_PROPS_TYPE } from "./type"
import FormValLayout from "./FormValLayout"

export default function UserAccount({
  updateFields,
  password,
  email,
  confirmPassword,
}: USERS_PROPS_TYPE) {
  return (
    <FormValLayout>
      <Label>Email</Label>
      <Input
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
        required
      />

      <Label>Password</Label>
      <Input
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        required
      />
      <Label>Confirm Password</Label>
      <Input
        type="password"
        value={confirmPassword}
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
        required
      />
    </FormValLayout>
  )
}

import { Label } from "@radix-ui/react-dropdown-menu"
import { Input } from "../ui/input"
import { USERS_PROPS_TYPE } from "./type"
import FormValLayout from "./FormValLayout"

export default function UserAddress({
  updateFields,
  address,
  zip,
  state,
  country,
}: USERS_PROPS_TYPE) {
  return (
    <FormValLayout>
      <Label>Address</Label>
      <Input
        type="text"
        value={address}
        onChange={(e) => updateFields({ address: e.target.value })}
        required
      />

      <Label>State</Label>
      <Input
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
        required
      />
      <Label>Country</Label>
      <Input
        type="text"
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
        required
      />
      <Label>Zip</Label>
      <Input
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
        required
      />
    </FormValLayout>
  )
}

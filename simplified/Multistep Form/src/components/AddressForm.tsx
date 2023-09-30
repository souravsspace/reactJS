import FormWrapper from "../style/FormWrapper"
import { FORM_DATA_TYPE } from "../types/types"

type AddressFormProps = FORM_DATA_TYPE & {
  updateFields: (fields: Partial<FORM_DATA_TYPE>) => void
}

export default function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddressFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>Street</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label>City</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label>State</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />
      <label>Zip</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWrapper>
  )
}

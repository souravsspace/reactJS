import FormWrapper from "../style/FormWrapper"
import { FORM_DATA_TYPE } from "../types/types"

type UserFormProps = FORM_DATA_TYPE & {
  updateFields: (fields: Partial<FORM_DATA_TYPE>) => void
}

export default function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        autoFocus
        required
        type="text"
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        type="text"
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        min={10}
        max={100}
        type="text"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}

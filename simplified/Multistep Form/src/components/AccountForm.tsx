import FormWrapper from "../style/FormWrapper"
import { FORM_DATA_TYPE } from "../types/types"

type AccountFormProps = FORM_DATA_TYPE & {
  updateFields: (fields: Partial<FORM_DATA_TYPE>) => void
}

export default function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>Email</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        className="border border-gray-500 rounded-md px-2 outline-none"
        required
        type="text"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}

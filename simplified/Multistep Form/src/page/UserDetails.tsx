import { useState } from "react"
import AccountForm from "../components/AccountForm"
import AddressForm from "../components/AddressForm"
import UserForm from "../components/UserForm"
import { useMultistepsForm } from "../custom/useMultistepsForm"
import { FORM_DATA_TYPE, INIT_DATA } from "../types/types"

export default function UserDetails() {
  const [data, setData] = useState(INIT_DATA)

  function updateFields(fields: Partial<FORM_DATA_TYPE>) {
    return setData((prev) => {
      return { ...prev, ...fields }
    })
  }

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepsForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <main className="relative max-w-[30rem] mx-auto m-4 p-8 border gap-4 border-gray-200 shadow-md rounded-lg font-sans">
      <form onSubmit={submitForm}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {steps.length}
        </div>
        <>{step}</>
        <div className="flex gap-3 items-center justify-end mt-6">
          {!isFirstStep && (
            <button type="button" onClick={back} className="btn-green">
              Back
            </button>
          )}
          <button type="submit" className="btn-green">
            {isLastStep ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </main>
  )
}

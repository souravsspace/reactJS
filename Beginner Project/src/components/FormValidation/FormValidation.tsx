import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { INIT_STATE } from "./type"
import useFormVal from "./useFormVal"
import { FormEvent, Suspense, lazy, useState } from "react"

const UserDetails = lazy(() => import("./UserDetails"))
const UserAddress = lazy(() => import("./UserAddress"))
const UserAccount = lazy(() => import("./UserAccount"))

export default function FormValidation() {
  const [user, setUser] = useState(INIT_STATE)
  function updateFields(field: Partial<typeof INIT_STATE>) {
    return setUser((prevData) => {
      return { ...prevData, ...field }
    })
  }

  const { back, next, step, currentStepIndex, steps, isLastPage, isFirstPage } =
    useFormVal({
      steps: [
        <UserDetails {...user} updateFields={updateFields} />,
        <UserAddress {...user} updateFields={updateFields} />,
        <UserAccount {...user} updateFields={updateFields} />,
      ],
    })

  function onSubmit(user: typeof INIT_STATE, e: FormEvent) {
    e.preventDefault()
    next()
    if (isLastPage) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(user, null, 2)}</code>
          </pre>
        ),
      })
    }
  }

  return (
    <main className="p-8">
      <form onSubmit={(e) => onSubmit(user, e)}>
        <div className="flex justify-end items-center">
          {currentStepIndex + 1} / {steps.length}
        </div>
        <div className="mb-6">
          <Suspense fallback={<h1 className="text-center">loading...</h1>}>
            {step}
          </Suspense>
        </div>
        <div className="flex justify-end items-center gap-1">
          <Button
            disabled={isFirstPage}
            type="button"
            variant={"outline"}
            onClick={back}
          >
            Back
          </Button>
          <Button type="submit">{isLastPage ? "Finish" : "Next"}</Button>
        </div>
      </form>
    </main>
  )
}

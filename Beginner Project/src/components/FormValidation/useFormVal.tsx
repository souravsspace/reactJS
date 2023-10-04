import { ReactElement, useState } from "react"

type FormValidationProps = {
  steps: ReactElement[]
}

export default function useFormVal({ steps }: FormValidationProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  const back = () => {
    setCurrentStepIndex((prev) => {
      if (prev <= 0) return prev
      return prev - 1
    })
  }

  const next = () => {
    setCurrentStepIndex((prev) => {
      if (prev === steps.length - 1) return prev
      return prev + 1
    })
  }

  return {
    back,
    next,

    steps,
    step: steps[currentStepIndex],
    currentStepIndex,

    isLastPage: currentStepIndex === steps.length - 1,
    isFirstPage: currentStepIndex === 0,
  }
}

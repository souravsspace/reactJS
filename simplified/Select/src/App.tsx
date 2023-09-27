import { useState } from "react"
import Select, { SelectOption } from "./Select/Select"

export default function App() {
  const options = [
    { value: 1, label: "First" },
    { value: 2, label: "Second" },
    { value: 3, label: "Third" },
    { value: 4, label: "Forth" },
    { value: 5, label: "Fifth" },
  ]

  const [value1, setValue1] = useState<SelectOption[]>([options[0]])
  const [value2, setValue2] = useState<SelectOption | undefined>(options[0])

  return (
    <>
      <Select
        multiple
        options={options}
        value={value1}
        onChange={(option) => setValue1(option)}
      />
      <br />
      <Select
        options={options}
        value={value2}
        onChange={(option) => setValue2(option)}
      />
    </>
  )
}

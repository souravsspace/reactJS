import { useState } from "react"
import SingleSelect from "./SingleSelect"
import { SELECT_DATA } from "../../data/SELECT_DATA"
import { OPTION_TYPE } from "../../types"
import MultipleSelect from "./MultipleSelect"

export default function Select() {
  const [value, setValue] = useState<OPTION_TYPE | undefined>(SELECT_DATA[0])
  const [values, setValues] = useState<OPTION_TYPE[]>([SELECT_DATA[0]])

  return (
    <main className="p-[8rem] h-screen w-full text-white bg-black-800 flex flex-col gap-10">
      <SingleSelect
        options={SELECT_DATA}
        value={value}
        onChange={(option) => setValue(option)}
      />
      <MultipleSelect
        options={SELECT_DATA}
        value={values}
        onChange={(option) => setValues(option)}
      />
    </main>
  )
}

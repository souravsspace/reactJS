import { useState } from "react"
import { SINGLE_SELECT_TYPE } from "../../types"

export default function SingleSelect({
  value,
  onChange,
  options,
}: SINGLE_SELECT_TYPE) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  function callClear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    onChange(undefined)
  }

  function callOption(option: typeof value) {
    onChange(option)
    isOptionSelected(option)
    setHighlightedIndex(0)
  }

  const isOptionSelected = (option: typeof value) => option?.id === value?.id

  return (
    <main>
      <h1 className="text-2xl font-bold">SSE or Single select element</h1>
      <br />
      <div className="inline-block min-w-[20rem]">
        <div
          tabIndex={0}
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen((prev) => !prev)}
          className="min-h-[1.5rem] relative justify-between flex gap-2 items-center border rounded-md py-2 px-4 focus:border-green-400 cursor-pointer"
        >
          <span>{value?.name}</span>
          <div className="flex gap-4 justify-center items-center">
            <button onClick={(e) => callClear(e)}>&times;</button>
            <div className="self-stretch w-[0.05rem] bg-white"></div>
            <div
              onClick={() => setIsOpen((prev) => !prev)}
              className="border-[0.25rem] border-transparent border-t-white translate-y-1"
            ></div>
          </div>
          <ul
            className={` ${
              isOpen ? "block" : "hidden"
            } absolute left-0 right-0 z-50 bg-black-800 top-[4rem] border max-h-[15rem] overflow-y-auto rounded-md `}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => callOption(option)}
                onMouseEnter={() => setHighlightedIndex(index)}
                className={`
                  ${isOptionSelected(option) ? "bg-green-400" : ""} 
                  ${highlightedIndex === index ? "bg-green-600" : ""}
                  py-2 px-4`}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

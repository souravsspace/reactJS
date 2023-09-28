import { useState } from "react"
import { MULTI_SELECT_TYPE, OPTION_TYPE } from "../../types"

export default function MultipleSelect({
  value,
  onChange,
  options,
}: MULTI_SELECT_TYPE) {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0)

  function callClear(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation()
    onChange([])
  }

  function callOption(id: number, option: OPTION_TYPE) {
    setHighlightedIndex(0)

    if (value.includes(option)) {
      onChange(value.filter((v) => v.id !== id))
    } else {
      onChange([...value, option])
    }

    isOptionSelected(option)
  }

  const isOptionSelected = (option: OPTION_TYPE) => value.includes(option)

  return (
    <main>
      <h1 className="text-2xl font-bold">SSE or Single select element</h1>
      <br />
      <div className="inline-block max-w-[20rem]">
        <div
          tabIndex={0}
          onBlur={() => setIsOpen(false)}
          onClick={() => setIsOpen((prev) => !prev)}
          className="min-h-[1.5rem] relative justify-between flex gap-2 items-center border rounded-md py-2 px-4 focus:border-green-400 cursor-pointer"
        >
          <span className="flex gap-1 items-center flex-wrap flex-grow">
            {value.map((option) => (
              <button
                key={option.id}
                onClick={(e) => {
                  e.stopPropagation()
                  callOption(option.id, option)
                }}
                className="py-1 px-2 cursor-pointer flex items-center gap-1 border border-green-400 rounded-md"
              >
                {option.name}
                <span>&times;</span>
              </button>
            ))}
          </span>
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
            } absolute left-0 z-50 bg-black-800 right-0 top-[4rem] border max-h-[15rem] overflow-y-auto rounded-md `}
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  callOption(option.id, option)
                }}
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

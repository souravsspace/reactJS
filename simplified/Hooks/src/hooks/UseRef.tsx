import { useEffect, useRef, useState } from "react"

export default function UseRef() {
  // const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")

  // const render = useRef(0)
  // useEffect(() => {
  //   render.current = render.current + 1
  // }, [])

  const prevNameRef = useRef("")

  useEffect(() => {
    prevNameRef.current = value
  }, [value])

  return (
    <div>
      <input
        type="text"
        // ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <h3>
        Preview : value is "{value}" this and used to be "{prevNameRef.current}"
      </h3>
      {/* <button onClick={() => inputRef.current?.focus()}>Focus</button> */}
      {/* <h3>Preview render count : {render.current} </h3> */}
    </div>
  )
}

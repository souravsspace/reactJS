import { useCallback, useState } from "react"
import CallBackList from "../components/CallBackList"

export default function UseCallback() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(
    (incrementer: number) => {
      return [
        number + incrementer,
        number + 1 + incrementer,
        number + 2 + incrementer,
      ]
    },
    [number]
  )

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prev) => !prev)}>Toggle</button>
      <CallBackList getItems={getItems} />
    </div>
  )
}

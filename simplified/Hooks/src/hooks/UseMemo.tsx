import { useEffect, useMemo, useState } from "react"

export default function UseMemo() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const dubbleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const theme = useMemo(() => {
    return {
      backgroundColor: dark ? "#333" : "#FFF",
      color: dark ? "#FFF" : "#333",
    }
  }, [dark])

  useEffect(() => {
    console.log("Theme Changed")
  }, [theme])

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button
        type="button"
        style={theme}
        onClick={() => setDark((prev) => !prev)}
      >
        Change Theme
      </button>
      <article style={theme}>{dubbleNumber}</article>
    </div>
  )
}

function slowFunction(num: number) {
  console.log("Calling Slow Function")
  for (let i = 0; i <= 800000000; i++) {}
  return num * 2
}

import { useState } from "react"

export default function useIDRcount() {
  const [count, setCount] = useState(0)
  const increase = () => setCount((prev) => prev + 1)
  const decrease = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)
  return { value: count, increaseValue: increase, decreaseValue: decrease, resetValue: reset}
}

import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"

export default function CustomHook() {
  const [value, setValue] = useLocalStorage("name", "")

  useUpdateLogger(value)

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}

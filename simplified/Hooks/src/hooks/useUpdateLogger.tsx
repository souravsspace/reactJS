import { useEffect } from "react"

export default function useUpdateLogger(value: string | number) {
  useEffect(() => {
    console.log(value)
  }, [value])
}

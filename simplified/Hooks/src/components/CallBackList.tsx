import { useEffect, useState } from "react"

export default function CallBackList({ getItems }: any) {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(5))
    console.log("Updating Items")
  }, [getItems])

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  )
}

import { useRef, useState } from "react"

export default function () {
  const valueRef = useRef<HTMLInputElement>(null)

  const [items, setItems] = useState<string[]>([])
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const value = valueRef.current!.value
    if (value === "") return

    setItems((prev) => [...prev, value])
    valueRef.current!.value = ""
  }

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search.."
      />
      <br />
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
        <input ref={valueRef} type="text" placeholder="Type anything.." />
        <button type="submit">Add</button>
      </form>
      <div>
        <h3>Items : </h3>
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

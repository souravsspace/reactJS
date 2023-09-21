import { useRef, useState } from "react"

export default function () {
  const [items, setItems] = useState<string[]>([])
  const [query, setQuery] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = inputRef.current!.value
    if (value === "") return
    setItems((prev) => {
      return [...prev, value]
    })
    inputRef.current!.value = ""
  }

  const FilteredItems = items.filter((item) => {
    return item.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search.."
      />
      <br />
      <form onSubmit={handleForm} style={{ display: "flex", gap: "0.5rem" }}>
        <input ref={inputRef} type="text" placeholder="Type anything.." />
        <button type="submit">Add</button>
      </form>
      <div>
        <h3>Items : </h3>
        {FilteredItems.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  )
}

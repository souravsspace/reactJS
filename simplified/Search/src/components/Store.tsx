import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function Store() {
  // const [onlyComputerItems, setOnlyComputerItems] = useState(false)
  // const [search, setSearch] = useState("")

  const DEFAULT_ITEMS = ["Computer", "Headphones", "Books", "Phone", "Water"]

  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    onlyComputerItems: "false",
  })

  const search = searchParams.get("search") ?? ""
  const onlyComputerItems = searchParams.get("onlyComputerItems") === "true"

  const items = DEFAULT_ITEMS.filter(
    (item) =>
      item.toLowerCase().includes(search.toLowerCase()) &&
      (!onlyComputerItems || item.toLowerCase().includes("computer"))
  )

  return (
    <>
      <h1>Store</h1>
      <div>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) =>
            setSearchParams(
              (prev) => {
                prev.set("search", e.target.value)
                return prev
              },
              { replace: true }
            )
          }
        />
      </div>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        <input
          type="checkbox"
          id="only"
          checked={onlyComputerItems}
          onChange={(e) =>
            setSearchParams(
              (prev) => {
                prev.set("onlyComputerItems", String(e.target.checked))
                return prev
              },
              { replace: true }
            )
          }
        />
        <label htmlFor="only">Only Computer Items</label>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  )
}

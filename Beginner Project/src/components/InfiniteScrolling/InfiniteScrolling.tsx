import { useCallback, useRef, useState } from "react"
import { Input } from "../ui/input"
import useBookSearch from "./useBookSearch"

export default function InfiniteScrolling() {
  const [query, setQuery] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const { loading, error, books, hasMore } = useBookSearch({
    query,
    pageNumber,
  })

  const observer = useRef<IntersectionObserver>()
  const lastBookElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore, loading]
  )

  return (
    <main className="p-8 flex gap-4 flex-col">
      <h1 className="text-2xl font-bold">Infinite Scrolling</h1>
      <Input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          setPageNumber(1)
        }}
      />
      <ul className="flex flex-col gap-2">
        {books.map((book, index) =>
          books.length === index + 1 ? (
            <li ref={lastBookElementRef} key={index}>
              {book}
            </li>
          ) : (
            <li key={index}>{book}</li>
          )
        )}
      </ul>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error"}</div>
    </main>
  )
}

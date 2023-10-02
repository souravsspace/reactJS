import axios, { Canceler } from "axios"
import { useEffect, useState } from "react"

type useBookSearchType = {
  query: string
  pageNumber: number
}

type Book = {
  title: string
}

export default function useBookSearch({
  query,
  pageNumber,
}: useBookSearchType) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setBooks([])
  }, [query])

  useEffect(() => {
    setError(false)
    setLoading(true)

    let cancel: Canceler
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks) => {
          const newBooks = res.data.docs.map((book: Book) => book.title)
          return [...new Set([...prevBooks, ...newBooks])]
        })
        setHasMore(res.data.docs.length > 0)
        setLoading(false)
      })
      .catch((err) => {
        if (axios.isCancel(err)) return
        console.log(err)
      })

    return () => cancel()
  }, [query, pageNumber])

  return { loading, error, books, hasMore }
}

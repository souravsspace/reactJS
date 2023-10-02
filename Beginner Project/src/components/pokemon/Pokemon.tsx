import { useEffect, useState } from "react"
import PokemonList from "./PokemonList"
import axios, { Canceler } from "axios"
import Pagination from "./Pagination"

export default function Pokemon() {
  const [list, setList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  )
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [prevPageUrl, setPrevPageUrl] = useState("")

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    let cancel: Canceler
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false)
        setList(res.data.results)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)
      })

    return () => cancel()
  }, [currentPageUrl])

  const goToNextPage = () => setCurrentPageUrl(nextPageUrl)
  const goToPrevPage = () => setCurrentPageUrl(prevPageUrl)

  if (loading) return <div className="text-center">Loading...</div>

  return (
    <main className="grid gap-4 p-6">
      <PokemonList list={list} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPrevPage={prevPageUrl ? goToPrevPage : null}
      />
    </main>
  )
}

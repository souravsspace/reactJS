import axios from "axios"
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

type SearchContextProviderType = {
  children: ReactNode
}

type SearchContextType = {
  users: object[]
}

const SearchContext = createContext({} as SearchContextType)

export function useSearchContext() {
  return useContext(SearchContext)
}

export default function SearchContextProvider({
  children,
}: SearchContextProviderType) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => setUsers(response.data.users))
  }, [])


  return (
    <SearchContext.Provider value={{ users }}>
      {children}
    </SearchContext.Provider>
  )
}

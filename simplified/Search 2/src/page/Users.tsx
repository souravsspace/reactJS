import { Input, Typography } from "@material-tailwind/react"
import { useSearchContext } from "../context/SearchContext"
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"

export default function Users() {
  const { users } = useSearchContext()

  const [searchParams, setSearchParams] = useSearchParams({ searchValue: "" })

  const searchValue = searchParams.get("searchParams")

  const filteredUsers = users.filter((user: any) => {
    if (!searchValue) return true

    useEffect(() => {
      return (
        user.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(searchValue.toLowerCase())
      )
    }, [searchValue])
  })

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams(
      (prev) => {
        prev.set("searchValue", e.target.value)
        return prev
      },
      { replace: true }
    )
  }

  return (
    <main className="md:px-20 px-4 py-4 grid gap-6">
      <form>
        <Input
          value={searchValue as St}
          onChange={handleSearchChange}
          label="Search.."
          crossOrigin={undefined}
        />
      </form>
      <ul className="grid grid-cols-3 gap-4">
        {filteredUsers.map((user: any, index) => (
          <li key={index}>
            <Typography>
              {user.firstName} {user.lastName}
            </Typography>
          </li>
        ))}
      </ul>
    </main>
  )
}

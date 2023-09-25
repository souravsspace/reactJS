import { Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export default function Navigation() {
  const navData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Users",
      path: "/users",
    },
  ]

  return (
    <nav className="md:px-20 px-4 py-4">
      <div className="flex justify-between items-center">
        <Typography className="text-xl font-semibold" color="red">
          Sourav
        </Typography>
        <ul className="flex items-center gap-5">
          {navData.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>
                <Typography>{item.name}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

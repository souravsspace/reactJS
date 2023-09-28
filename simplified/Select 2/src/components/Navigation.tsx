import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <main>
      <nav className="flex fixed w-full justify-between items-center py-6 px-[8rem] bg-black-900 text-white">
        <h2 className="text-2xl font-bold uppercase font-mono">Sourav</h2>
        <ul className="flex gap-5 items-center">
          <li className="py-2 px-4 rounded-md">
            <Link to="/select">Select</Link>
          </li>
          <li>
            <button className="bg-white border hover:bg-transparent hover:text-white hover:rounded-lg text-black-900 py-2 px-4 rounded transition-all duration-150 ease-linear">
              SetDarkMode
            </button>
          </li>
        </ul>
      </nav>
    </main>
  )
}

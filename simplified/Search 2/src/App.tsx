import { Routes, Route } from "react-router-dom"
import SearchContextProvider from "./context/SearchContext"
import Home from "./page/Home"
import About from "./page/About"
import Navigation from "./components/Navigation"
import Users from "./page/Users"

export default function App() {
  return (
    <SearchContextProvider>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </SearchContextProvider>
  )
}

import { Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Select from "./components/selects/Select"

export default function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/select" element={<Select />} />
      </Routes>
    </main>
  )
}

import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Store from "./components/Store"
import Navigation from "./components/Navigation"

function App() {
  return (
    <article>
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
    </article>
  )
}

export default App

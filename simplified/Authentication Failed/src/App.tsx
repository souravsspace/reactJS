import { Routes, Route } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
function App() {

  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/LogIn" element={<Login />} />
    </Routes>
  )
}

export default App

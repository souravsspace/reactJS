import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Home } from "./Pages/Home";
import ShowDataProvider from "./Context/ShowData";

function App() {
  return (
    <ShowDataProvider>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </ShowDataProvider>
  );
}

export default App;

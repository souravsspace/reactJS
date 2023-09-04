import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { RtNav } from "./Layouts/RtNav";
import { RtHome } from "./Layouts/RtHome";
import { RtContact } from "./Layouts/RtContact";
import { RtLogin } from "./Layouts/RtLogin";
import { Store } from "./Store";

const ReduxToolkit: FC = () => {
  return (
    <Router>
      <RtNav />
      <Provider store={Store}>
        <Routes>
          <Route path="/" element={<RtHome />} />
          <Route path="/contact" element={<RtContact />} />
          <Route path="/login" element={<RtLogin />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default ReduxToolkit;

import { FC } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ReduxToolkit: FC = () => {
  return (
    <Router>
      <RtNav />
      <Routes>
        <Route path="/" element={<RtHome />} />
        <Route path="/contact" element={<RtContact />} />
        <Route path="/login" element={<RtLogin />} />
      </Routes>
    </Router>
  );
};

export default ReduxToolkit;

export const RtHome: FC = () => {
  return (
    <div className="container">
      <article>
        <h1>Home</h1>
      </article>
    </div>
  );
};

export const RtNav: FC = () => {
  return (
    <div className="container" style={{ marginBlock: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>
        <strong>Redux Toolkit</strong>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export const RtContact: FC = () => {
  return (
    <div className="container">
      <article>
        <h1>Contact</h1>
      </article>
    </div>
  );
};

export const RtLogin: FC = () => {
  return (
    <div className="container">
      <article>
        <h1>Login</h1>
      </article>
    </div>
  );
};

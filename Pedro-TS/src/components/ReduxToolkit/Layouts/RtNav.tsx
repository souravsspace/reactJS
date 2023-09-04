import { FC } from "react";
import { Link } from "react-router-dom";

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

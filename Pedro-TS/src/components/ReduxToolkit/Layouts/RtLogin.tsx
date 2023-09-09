import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../Store";


export const RtLogin: FC = () => {
  const [newUsername, setNewUsername] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  const handleLogin = ()=> {
    dispatch(login({ username: newUsername }));
    localStorage.setItem("username", username);
  }
  return (
    <div className="container">
      <article>
        <h1>Login Page</h1>
        <div>
          <h2>Hey, {username}!</h2>
          <input
            value={newUsername}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNewUsername(e.target.value)
            }
            type="text"
            placeholder="enter username"
          />
          <div>
            <button
              onClick={() => handleLogin()}
              type="button"
            >
              Login
            </button>
            <button
              onClick={() => dispatch(logout({ username: '' }))}
              type="button"
            >
              Log out
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

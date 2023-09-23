import { useState } from "react";

type userType = {
  name: string;
  email: string;
}

export default function LoggedIn() {
  const [user, setUser] = useState<userType>({} as userType);
  const loggedIn = () => {
    setUser({
      name: "John Doe",
      email: "ukil2234@mail.com",
    });
  };
  const loggedOut = () => {
    setUser({
      name: "",
      email: ""
    });
  };

  return (
    <div>
      <div className="grid">
        <button onClick={loggedIn}>Login</button>
        <button onClick={loggedOut}>Logout</button>
      </div>
    </div>
  );
}

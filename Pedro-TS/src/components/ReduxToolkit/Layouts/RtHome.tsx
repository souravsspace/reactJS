import { FC } from "react";
import { useSelector } from "react-redux";

export const RtHome: FC = () => {
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div className="container">
      <article>
        <h1>Home Page</h1>
        <h2>Hey, {username}!</h2>
      </article>
    </div>
  );
};

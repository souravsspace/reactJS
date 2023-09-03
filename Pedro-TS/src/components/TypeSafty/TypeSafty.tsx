import { FC } from "react";
import useCountHook from "./useCountHook";

export enum CountryData {
  BD = "Bangladesh",
  IN = "India",
}

interface Props {
  name: string;
  age: number;
  isTypeScript: boolean;
  isJavaScript: boolean;
  isReact: boolean;
  isVue: boolean;
  hobby: string[];
  country: CountryData;
  myName: string;
}

const TypeSafty: FC<Props> = ({
  name,
  age,
  isJavaScript,
  isTypeScript,
  isReact,
  isVue,
  hobby,
  country,
  myName,
}) => {
  const getMarks = (val: string): number => {
    if (val === "Sourav") return 57.5;
    else return 0;
  };
  const { value, increaseVal, decreaseVal, resetVal } = useCountHook();
  return (
    <div className="container">
      <article>
        <section>
          <h1>Preview : {value}</h1>
          <div style={{ display: "flex", gap: "0.25rem" }}>
            <button onClick={increaseVal} type="button">
              Increase
            </button>
            <button onClick={decreaseVal} type="button">
              Decrease
            </button>
            <button onClick={resetVal} type="button">
              Reset
            </button>
          </div>
        </section>
        <section>
          <h1>{name}</h1>
          <p>My name is {myName}</p>
          <p>Country: {country}</p>
          <p>Age: {age}</p>
          <p>Marks: {getMarks(myName)}</p>
          <p>TypeScript: {isTypeScript ? "Yes" : "No"}</p>
          <p>JavaScript: {isJavaScript ? "Yes" : "No"}</p>
          <p>React: {isReact ? "Yes" : "No"}</p>
          <p>Vue: {isVue ? "Yes" : "No"}</p>
          <p>Hobby: {hobby.join(", ")}</p>
        </section>
      </article>
    </div>
  );
};

export default TypeSafty;

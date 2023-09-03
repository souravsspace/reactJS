import { useState } from "react";

const useCountHook = () => {
  const [state, setState] = useState<number>(0);

  const increaseVal = () => {
    setState((prev) => prev + 1);
  };
  const decreaseVal = () => {
    setState((prev) => prev - 1);
  };
  const resetVal = () => {
    setState(0);
  };
  return { value: state, increaseVal, decreaseVal, resetVal };
};

export default useCountHook;

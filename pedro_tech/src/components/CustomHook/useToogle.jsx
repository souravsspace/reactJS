import { useState } from "react";

export default function useToogle(value = false) {
  const [state, setState] = useState(value);
  const toggle = () => setState(!state);
  // return [state, toggle];
  return { state, toggle };
}

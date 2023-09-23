import { ReactNode, createContext, useContext } from "react";
import { theme } from "./theme";

type ThemeContextProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext(theme);

export const useTheme = () => useContext(ThemeContext);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

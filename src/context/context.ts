import { createContext } from "react";

export type theme = "light" | "dark" | "";
type ThemeContextState = {
  currentTheme: theme;
  changeTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextState>({
  currentTheme: "",
  changeTheme: () => {},
});

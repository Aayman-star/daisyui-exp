"use client";
import { theme } from "./context";
import { ThemeContext } from "./context";
import { useContext } from "react";
import { useState, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [currentTheme, setCurrentTheme] = useState<theme>("light");

  const changeTheme = () => {
    console.log("changeTheme", currentTheme);
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ContextProvider;

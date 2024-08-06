"use client";
import { useContext, ReactNode, useEffect } from "react";
import { ThemeContext } from "./context";
// import { themeChange } from "theme-change";

type Props = {
  children: any;
};
const ThemeProvider = ({ children }: Props) => {
  //   useEffect(() => {
  //     themeChange(false);
  //     // 👆 false parameter is required for react project
  //   }, []);
  const { currentTheme } = useContext(ThemeContext);
  return <html data-theme={currentTheme}>{children}</html>;
};

export default ThemeProvider;

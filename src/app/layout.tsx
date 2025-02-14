import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ThemeProvider from "@/context/ThemeProvider";
import ContextProvider from "@/context/ContextProvider";

import "./globals.css";

const monty = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={monty.className}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>{" "}
      </html>
    </ContextProvider>
  );
}

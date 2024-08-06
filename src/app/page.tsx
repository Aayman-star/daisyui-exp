"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/context";

export default function Home() {
  const { currentTheme, changeTheme } = useContext(ThemeContext);
  return (
    <main className="flex min-h-screen flex-col items-center gap-y-10 p-24">
      <div className="flex items-center gap-x-4">
        <h1 className="text-3xl font-bold">Experimentaion with daisy ui</h1>
        <button onClick={changeTheme} className="btn  rounded-md">
          I am here
        </button>
      </div>
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Theme
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
          <li>Light</li>
          <li>Dark</li>
        </ul>
      </div> */}
      <div className="flex flex-wrap gap-2">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
      <input
        type="text"
        placeholder="type here..."
        className="input input-bordered w-[50%]"
      />
    </main>
  );
}

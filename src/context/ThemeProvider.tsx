"use client"; // 👈 mark this as a client component

import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("dark");
  const [fontContent, setFontContent] = useState("text-md");
  const [fontTitle, setFontTitle] = useState("text-5xl");
  const [fontSubTitle, setFontSubTitle] = useState("text-3xl");
    const [scrolled, setScrolled] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, fontContent, setFontContent, fontTitle, setFontTitle, fontSubTitle, setFontSubTitle, scrolled, setScrolled }}>
      {children}
    </ThemeContext.Provider>
  );
}

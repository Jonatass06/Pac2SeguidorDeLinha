"use client"; // 👈 mark this as a client component

import { useState } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("DarkMode");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

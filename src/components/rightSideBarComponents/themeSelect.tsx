"use client";
import { useContext } from "react";
import ChangeColor from "../../../public/changeColor";
import ThemeContext from "@/context/ThemeContext";

export default function ThemeSelect() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex w-11/12">
      <ChangeColor />
      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
          console.log(theme);
          
        }}
      >
        <option value="DarkMode">Modo Escuro</option>
        <option value="LightMode">Modo Claro</option>
      </select>
    </div>
  );
}

import { createContext } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: "DarkMode",
  setTheme: () => {},
});

export default ThemeContext;

import { createContext } from "react";

const ThemeContext = createContext<{
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  fontContent: string;
  setFontContent: React.Dispatch<React.SetStateAction<string>>;
  fontTitle: string;
  setFontTitle: React.Dispatch<React.SetStateAction<string>>;
  fontSubTitle: string;
  setFontSubTitle: React.Dispatch<React.SetStateAction<string>>;
}>({
  theme: "dark",
  setTheme: () => {},
  fontContent: "text-md",
  setFontContent: () => {},
  fontTitle: "text-5xl",
  setFontTitle: () => {},
  fontSubTitle: "text-3xl",
  setFontSubTitle: ()=>{}
});

export default ThemeContext;

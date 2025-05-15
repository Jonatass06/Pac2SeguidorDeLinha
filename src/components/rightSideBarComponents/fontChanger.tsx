import { useContext, useState } from "react";
import FontIcon from "../../../public/FontIcon";
import ThemeContext from "@/context/ThemeContext";

export default function FontChanger() {
  const fontsList = [
    "text-sm", //1
    "text-md", //2 - text
    "text-lg", //3
    "text-xl", //4
    "text-2xl", //5
    "text-3xl", //6 - subTitle
    "text-4xl", //7
    "text-5xl", //8 - title
    "text-6xl", //9
    "text-7xl", //10
  ];
  const {
    fontContent,
    fontSubTitle,
    fontTitle,
    setFontContent,
    setFontSubTitle,
    setFontTitle,
  } = useContext(ThemeContext);
  const indexOfActualFont = fontsList.indexOf(fontContent);
  const [tamFont, setTamFont] = useState(indexOfActualFont);

  return (
    <div className="lg:w-11/12 w-0 h-full z-10">
      <div className="flex w-full justify-center *:fill-fontTextLightMode dark:*:fill-fontTextDarkMode gap-6 items-center">
        <FontIcon />
        <div className="flex items-center w-10/12 bg-secondaryLightMode dark:bg-secondaryDarkMode lg:p-4 rounded-sm justify-center">
          <button
            className="flex items-center justify-center h-2 lg:p-2 cursor-pointer"
            onClick={() => {
              if (fontsList.indexOf(fontContent) - 1 >= 0) {
                setFontContent(fontsList[fontsList.indexOf(fontContent) - 1]);
              }
              if (fontsList.indexOf(fontSubTitle) - 1 >= 4) {
                setFontSubTitle(fontsList[fontsList.indexOf(fontSubTitle) - 1]);
              }
              if (fontsList.indexOf(fontTitle) - 1 >= 6) {
                setFontTitle(fontsList[fontsList.indexOf(fontTitle) - 1]);
              }
              if (tamFont - 1 >= 0) {
                setTamFont(tamFont - 1);
              }
            }}
          >
            -
          </button>
          <div className="lg:w-9/12 rounded-full h-2 flex items-center">
            <input
              type="range"
              min="0"
              max="3"
              value={tamFont}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setTamFont(value);
                setFontContent(fontsList[value]);
                setFontSubTitle(fontsList[value + 4]);
                setFontTitle(fontsList[value + 6]);
              }}
              className="lg:w-full w-0 lg:accent-primaryLightMode lg:dark:accent-primaryDarkMode "
            />
          </div>
          <button
            className="flex items-center justify-center h-2 lg:p-2 cursor-pointer"
            onClick={() => {
              if (fontsList.indexOf(fontContent) + 1 < fontsList.length - 6) {
                setFontContent(fontsList[fontsList.indexOf(fontContent) + 1]);
              }
              if (fontsList.indexOf(fontSubTitle) + 1 < fontsList.length - 2) {
                setFontSubTitle(fontsList[fontsList.indexOf(fontSubTitle) + 1]);
              }
              if (fontsList.indexOf(fontTitle) + 1 < fontsList.length) {
                setFontTitle(fontsList[fontsList.indexOf(fontTitle) + 1]);
              }
              if (tamFont + 1 <= 3) {
                setTamFont(tamFont + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

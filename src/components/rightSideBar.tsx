import React from "react";
import SearchInput from "./rightSideBarComponents/searchInput";
import ThemeSelect from "./rightSideBarComponents/themeSelect";
import FontChanger from "./rightSideBarComponents/fontChanger";
import PathSvg from "../../public/pathSvg";
import DogSvg from "../../public/dogSvg";

export default function RightSideBar() {
  return (
    <div className="h-11/12 w-96 bg-foregroundLightMode dark:bg-foregroundDarkMode border-2 border-detailsDarkerLightMode dark:border-detailsDarkerDarkMode rounded-lg mt-3 fixed">
      <div className="flex items-center flex-col gap-8 h-3/12">
        <SearchInput />
        <ThemeSelect />
        <FontChanger />
      </div>
        <div className="flex flex-col items-end h-9/12">
          <PathSvg />
          <DogSvg />
        </div>
    </div>
  );
}

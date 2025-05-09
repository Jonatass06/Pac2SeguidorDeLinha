"use client";

import { useContext, useState } from "react";
import Logo from "../../public/Logo";
import MapIcon from "../../public/mapIcon";
import Track from "./track";
import ThemeContext from "@/context/ThemeContext";
import TrackComponent from "./track";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav
        className={
          "w-full h-12 bg-headerLightMode dark:bg-headerDarkMode flex items-center justify-center fixed top-0 " +
          theme
        }
      >
        <div className="w-1/6 flex justify-center">
          <Logo></Logo>
        </div>
        <div className="w-4/6 flex justify-center">
          <Track></Track>
        </div>
        <div
          className="w-1/6 flex justify-center cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <MapIcon></MapIcon>
        </div>
      </nav>

      {isOpen && (
        <div className="h-full flex items-end">
          <TrackComponent />
        </div>
      )}
    </>
  );
}

"use client";

import { useContext, useState } from "react";
import Logo from "../../public/Logo";
import MapIcon from "../../public/mapIcon";
import Track from "./track";
import ThemeContext from "@/context/ThemeContext";
import Steps from "./steps";
import { AnimatePresence, motion } from "motion/react";

export default function Header() {
  const { theme, scrolled } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait">
        {!scrolled ? (
          <div className="flex justify-center">
            <motion.nav
              className={
                "w-full h-12 bg-headerLightMode dark:bg-headerDarkMode flex items-center justify-center fixed top-0 z-10 " +
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
                onClick={() => setIsOpen(!isOpen)}
              >
                <MapIcon></MapIcon>
              </div>
              {isOpen && (
                <>
                  <button
                    className="z-30 cursor-pointer size-20 text-4xl text-detailsLightMode dark:text-detailsDarkMode"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    x
                  </button>
                  <Steps />
                </>
              )}
            </motion.nav>
          </div>
        ) : (
          <div className="lg:w-9/12 xl-w-full w-full h-32 flex justify-center items-center absolute">
            <motion.nav
              className={
                "lg:w-6/12 md:w-7/12 sm:w-10/12 w-11/12  h-16 flex items-center justify-center z-10 rounded-full " +
                theme
              }
            >
              <div className="w-full h-16 flex justify-center backdrop-blur rounded-full bg-[#cecece] dark:bg-[#29292999]">
                <Track></Track>
              </div>
              <div
                className="absolute lg:w-6/12 md:w-7/12 sm:w-10/12 w-11/12 flex justify-end cursor-pointer pr-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="bg-primaryLightMode dark:bg-primaryDarkMode sm:p-3 p-1.5 rounded-full">
                  <MapIcon></MapIcon>
                </div>
              </div>
              {isOpen && (
                <>
                  <button
                    className="absolute w-full flex justify-end z-30 cursor-pointer size-20 text-4xl text-detailsLightMode dark:text-detailsDarkMode pr-10"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    x
                  </button>
                  <Steps />
                </>
              )}
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

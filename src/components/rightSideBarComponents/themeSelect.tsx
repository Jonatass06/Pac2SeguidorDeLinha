"use client";
import { useContext, useState } from "react";
import ChangeColor from "../../../public/changeColor";
import ThemeContext from "@/context/ThemeContext";
import DownArrow from "../../../public/downArrowIcon";
import { AnimatePresence, motion } from "motion/react";

export default function ThemeSelect() {
  const { setTheme, theme } = useContext(ThemeContext);
  const [choosenTheme, setChoosenTheme] = useState("Modo Escuro");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-11/12 h-full">
      <div className="flex flex-col w-full justify-center text-fontTextLightMode dark:text-fontTextDarkMode gap-2 items-center">
        <div className="flex w-full items-center gap-6 justify-center">
          <button className="cursor-pointer *:fill-fontTextLightMode dark:*:fill-fontTextDarkMode" onClick={() => {            
            if (choosenTheme == "Modo Escuro") {
              setChoosenTheme("Modo Claro");
              setTheme("");
            } else {
              setChoosenTheme("Modo Escuro");
              setTheme("dark");
            }
            setIsOpen(false);
          }}>
            <ChangeColor />
          </button>
          <button
            className="flex items-center w-10/12 bg-secondaryLightMode dark:bg-secondaryDarkMode p-2 rounded-sm justify-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex w-11/12 justify-between items-center">
              {choosenTheme}
              <DownArrow />
            </div>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute w-9/12 flex flex-col gap-2 bg-secondaryLightMode dark:bg-secondaryDarkMode text-fontTextLightMode dark:text-fontTextDarkMode p-2 rounded-sm mt-36 ml-10"
            >
              <p
                onClick={() => {
                  setChoosenTheme("Modo Escuro");
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className="hover:bg-detailsDarkerLightMode hover:dark:bg-detailsDarkerDarkMode rounded-sm p-1 cursor-pointer"
              >
                Modo Escuro
              </p>
              <p
                onClick={() => {
                  setChoosenTheme("Modo Claro");
                  setTheme("");
                  setIsOpen(false);
                }}
                className="hover:bg-detailsDarkerLightMode hover:dark:bg-detailsDarkerDarkMode rounded-sm p-1 cursor-pointer"
              >
                Modo Claro
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

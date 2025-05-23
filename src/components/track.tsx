"use client";

import { subjects } from "@/subjects/subjects";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion"; // <-- ensure using framer-motion

export default function Track() {
  const pathname = usePathname();
  const [itemHovered, setItemHovered] = useState<string | null>(null);
  const subjectObject = useMemo(
    () => subjects.find((s) => s.slug === pathname.split("/")[1]),
    [pathname]
  );

  if(!subjectObject){
    return
  }

  return (
    <div className="flex text-fontTextLightMode dark:text-fontTextDarkMode">
      {subjects.map((item, index) => (
        <div key={index} className="flex items-center">
          {/* Dot container */}
          <div className="relative flex flex-col items-center">
            <motion.a
              href={item.slug}
              className={`rounded-full ${
                index >= subjectObject!.id ? "bg-detailsLightMode dark:bg-detailsDarkMode size-3" : "bg-primaryLightMode dark:bg-primaryDarkMode size-4"
              }`}
              onMouseEnter={() => setItemHovered(item.slug)}
              onMouseLeave={() => setItemHovered(null)}
            ></motion.a>

            {/* Tooltip */}
            <AnimatePresence>
              {itemHovered === item.slug && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-max min-w-16 h-8 flex justify-center items-center bg-headerLightMode dark:bg-headerDarkMode text-fontTextLightMode dark:text-fontTextDarkMode p-2 rounded-2xl z-10"
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Connector line */}
          {index !== subjects.length - 1 && (
            <div
              className={`2xl:w-20 xl:w-14 lg:w-8 md:w-10 sm:w-8 w-6 h-1.5 m-2 rounded-2xl ${
                index + 1 < subjectObject!.id ? "bg-primaryLightMode dark:bg-primaryDarkMode" : "bg-detailsLightMode dark:bg-detailsDarkMode"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
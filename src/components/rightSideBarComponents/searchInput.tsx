import { AnimatePresence, motion } from "motion/react";
import Magnifier from "../../../public/magnifier";
import { useState } from "react";
import { Subject, subjects } from "@/subjects/subjects";

export default function SearchInput() {
  const [results, setResults] = useState<Subject[]>([]);
  const [inputValue, setInputValue] = useState("");

  function verifyIfHasParent(subject: Subject) {
    return subjects.includes(subject);
  }
  function returnParent(subject: Subject) {
    return subjects.find((group) => group.subtitles!.includes(subject));
  }

  function searchResults(text: string, subjects: Subject[]) {
    if (verifyIfHasParent(subjects[0]) || text == "") {
      setResults([]);
    }
    subjects.forEach((item) => {
      if (item.title.toLowerCase().includes(text.toLowerCase())) {
        setResults((prev) => [...prev, item]);
      }
      if (item.subtitles) {
        searchResults(text, item.subtitles);
      }
    });
  }

  return (
    <div className="flex lg:w-11/12 w-0 flex-col items-center justify-center mt-6 gap-2">
      <div className="flex w-full items-center justify-center">
        <div className="bg-secondaryLightMode dark:bg-secondaryDarkMode dark:*:stroke-fontTextDarkMode *:stroke-fontTextLightMode rounded-l-2xl h-10 flex items-center lg:p-4 ">
          <Magnifier />
        </div>
        <input
          className="text-fontTextLightMode dark:text-fontTextDarkMode w-10/12 bg-secondaryLightMode dark:bg-secondaryDarkMode rounded-r-2xl h-10 outline-none"
          placeholder="Pesquisar"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            searchResults(e.target.value, subjects);
          }}
        ></input>
      </div>
      <AnimatePresence>
        {results.length != 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="bg-secondaryLightMode dark:bg-secondaryDarkMode w-10/12 max-h-36 p-2 flex flex-col gap-2 overflow-auto pl-2 rounded-b-2xl absolute mt-48"
          >
            {results.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-fontTextLightMode dark:text-fontTextDarkMode flex flex-col"
                >
                  <a
                    href={
                      verifyIfHasParent(item)
                        ? "/" + item.slug
                        : "/" + returnParent(item)?.slug + "#" + item.slug
                    }
                    className=""
                  >
                    {verifyIfHasParent(item)
                      ? item.title
                      : returnParent(item)?.title + " - " + item.title}
                  </a>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

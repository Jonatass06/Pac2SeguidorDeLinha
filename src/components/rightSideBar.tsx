import { Subject, subjects } from "@/subjects/subjects";
import React, { useState } from "react";
import Magnifier from "../../public/magnifier";
import { AnimatePresence, motion } from "motion/react";

export default function RightSideBar({ subject }: { subject: Subject }) {
  const [results, setResults] = useState<Subject[]>([]);
  const [inputValue, setInputValue] = useState("");

  function searchResults(text: string, subjects: Subject[]) {
    console.log(text);
    setResults([]);
    subjects.map((item) => {
      if (item.title.includes(text)) {
        setResults((prev) => [...prev, item]);
      }
    });
    if (text == "") {
      setResults([]);
    }
  }

  return (
    <div className="h-11/12 w-96 bg-foreground border-2 border-detailsDarker rounded-lg mt-3 fixed">
      <div className="flex justify-center">
        <div className="flex w-11/12 flex-col items-center justify-center mt-6 gap-2">
          <div className="flex w-full items-center justify-center">
            <div className="bg-secondary rounded-l-2xl h-10 flex items-center p-4 ">
              <Magnifier />
            </div>
            <input
              className="text-fontText w-10/12 bg-secondary rounded-r-2xl h-10 outline-none"
              placeholder="Pesquisar"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                searchResults(e.target.value, subjects);
              }}
            ></input>
          </div>
          {results.length != 0 && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-secondary w-10/12 max-h-36 p-2 flex flex-col gap-2 overflow-auto"
              >
                {results.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="text-fontText flex flex-col pl-2"
                    >
                      <a href={"/" + item.slug} className="">
                        {item.title}
                      </a>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}

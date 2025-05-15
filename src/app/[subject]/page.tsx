"use client";
import { subjects } from "../../subjects/subjects";
import React, {
  use,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import LeftSideBar from "../../components/leftSideBar";
import RightSideBar from "../../components/rightSideBar";
import ThemeContext from "@/context/ThemeContext";
import { motion } from "motion/react";

export default function Main({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [mounted, setMounted] = useState(false);
  const {
    theme,
    fontContent,
    fontSubTitle,
    fontTitle,
    setScrolled,
    scrolled,
    setActualObject,
  } = useContext(ThemeContext);
  useEffect(() => {
    if (!mounted || !scrollRef.current) return;

    const scrollElement = scrollRef.current;

    const handleScroll = () => {
      const scrollTop = (scrollElement as HTMLElement).scrollTop;
      setScrollPos(scrollTop);
      setScrolled(scrollTop !== 0);
    };
    scrollElement.addEventListener("scroll", handleScroll);

    return () => scrollElement.removeEventListener("scroll", handleScroll);
  }, [mounted, setScrolled]);
  const { subject } = use(params);
  console.log(subject);

  const subjectObject = useMemo(
    () => subjects.find((s) => s.slug == subject),
    [subject]
  );
  useEffect(() => {
    setMounted(true);
    setActualObject(subjectObject!);
  }, [setActualObject, subjectObject]);
  const first = useMemo(() => subjectObject?.content[0], [subjectObject]);
  if (!mounted || !subjectObject || !first) {
    return null;
  }
  return (
    <motion.main
      ref={scrollRef}
      layout
      transition={{ duration: 1, ease: "easeInOut" }}
      className={
        "w-full h-full flex overflow-auto" +
        (scrolled ? " pt-2 " : " pt-12 ") +
        "bg-backgroundLightMode dark:bg-backgroundDarkMode " +
        theme
      }
      onScroll={() => (scrollPos != 0 ? setScrolled(true) : setScrolled(false))}
    >
      <section className="xl:w-3/12 lg:w-0 h-full flex justify-center">
        <LeftSideBar subject={subjectObject}></LeftSideBar>
      </section>
      <section className="xl:w-6/12 lg:w-9/12 w-full flex justify-center pt-4">
        <section className="w-10/12 flex flex-col gap-10">
          <section className="w-full h-max flex sm:flex-row flex-col justify-center gap-5">
            <div>{subjectObject?.image}</div>
            <div className="flex flex-col gap-4">
              <h1
                className={
                  "text-fontTitleLightMode dark:text-fontTitleDarkMode " +
                  fontTitle
                }
              >
                {subjectObject?.title}
              </h1>
              <div
                className={
                  "text-fontTextLightMode dark:text-fontTextDarkMode text-justify text-md h-max " +
                  fontContent
                }
              >
                {first.content}
              </div>
            </div>
          </section>
          <section
            className={
              "text-fontTextLightMode dark:text-fontTextDarkMode text-justify " + fontContent
            }
          >
            {subjectObject?.content.map((content, index) => (
              <div key={index}>{content.content}</div>
            ))}
          </section>
          <div className="">
            {subjectObject?.subtitles?.map((subItem, index) => {
              return (
                <div
                  key={index}
                  id={subItem.slug}
                  className="flex flex-col gap-10 scroll-mt-12 text-justify "
                >
                  <div
                    className={
                      "text-fontTitleLightMode dark:text-fontTitleDarkMode pt-4 " +
                      fontSubTitle
                    }
                  >
                    {subItem.title}
                  </div>
                  <div
                    className={
                      "text-fontTextLightMode dark:text-fontTextDarkMode " +
                      fontContent
                    }
                  >
                    {subItem?.content.map((content, index) => (
                      <div
                        key={index}
                        id={content.id}
                        className="scroll-mt-12 flex flex-col"
                      >
                        <div className="pt-2 pb-2 text-fontTitleLightMode dark:text-fontTitleDarkMode">
                          {content.title}
                        </div>
                        <div>{content.content}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
      <section className="xl:w-3/12 lg:w-4/12 hidden lg:flex  justify-center">
        <RightSideBar></RightSideBar>
      </section>
    </motion.main>
  );
}

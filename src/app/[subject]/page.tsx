"use client";
import { subjects } from "../../subjects/subjects";
import React, { use, useContext, useEffect, useMemo, useState } from "react";
import LeftSideBar from "../../components/leftSideBar";
import RightSideBar from "../../components/rightSideBar";
import ThemeContext from "@/context/ThemeContext";

export default function Main({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, fontContent, fontSubTitle, fontTitle } = useContext(ThemeContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  const { subject } = use(params);
  console.log(subject);

  const subjectObject = useMemo(
    () => subjects.find((s) => s.slug == subject),
    [subject]
  );
  const first = useMemo(() => subjectObject?.content[0], [subjectObject]);
  if (!mounted || !subjectObject || !first) {
    return null;
  }
  return (
    <>
      <main
        className={
          "w-full h-full flex overflow-auto pt-12 bg-backgroundLightMode dark:bg-backgroundDarkMode " +
          theme
        }
      >
        <section className="w-3/12 h-full flex justify-center">
          <LeftSideBar subject={subjectObject}></LeftSideBar>
        </section>
        <section className="w-6/12 flex justify-center pt-4">
          <section className="w-10/12 flex flex-col gap-10">
            <section className="w-full h-max flex justify-center gap-5">
              <div>{subjectObject?.image}</div>
              <div className="flex flex-col gap-4">
                <h1 className={"text-fontTitleLightMode dark:text-fontTitleDarkMode "+ fontTitle}>
                  {subjectObject?.title}
                </h1>
                <div className={"text-fontTextLightMode dark:text-fontTextDarkMode text-md h-max "+ fontContent}>
                  {first.content}
                </div>
              </div>
            </section>
            <section className={"text-fontTextLightMode dark:text-fontTextDarkMode "+ fontContent}>
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
                    className="flex flex-col gap-10 scroll-mt-12 "
                  >
                    <div className={"text-fontTitleLightMode dark:text-fontTitleDarkMode pt-4 "+fontSubTitle}>
                      {subItem.title}
                    </div>
                    <div className={"text-fontTextLightMode dark:text-fontTextDarkMode " + fontContent}>
                      {subItem?.content.map((content, index) => (
                        <div
                          key={index}
                          id={content.id}
                          className="scroll-mt-12 flex flex-col"
                        >
                          <div className="pt-2 pb-2 text-fontTitleLightMode dark:text-fontTitleDarkMode">{content.title}</div>
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
        <section className="w-3/12 flex justify-center">
          <RightSideBar></RightSideBar>
        </section>
      </main>
    </>
  );
}

"use client";
import { subjects } from "../../subjects/subjects";
import React, { use, useEffect, useMemo, useState } from "react";
import LeftSideBar from "../../components/leftSideBar";
import RightSideBar from "../../components/rightSideBar";

export default function Main({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  const { subject } = use(params);
  console.log(subject);

  const subjectObject = useMemo(
    () => subjects.find((s) => s.slug == subject),
    [subject]
  );
  const first = useMemo(
    () => subjectObject?.content[0],
    [subjectObject]
  );
  if (!mounted || !subjectObject || !first) {
    return null; 
  }
  return (
    <>
      <main className="w-full h-full flex overflow-auto pt-12 bg-backgroundLightMode dark:bg-backgroundDarkMode">
        <section className="w-3/12 h-full flex justify-center">
          <LeftSideBar subject={subjectObject}></LeftSideBar>
        </section>
        <section className="w-6/12 flex justify-center pt-4">
          <section className="w-10/12 flex flex-col gap-10">
            <section className="w-full h-max flex justify-center gap-5">
              <div>{subjectObject?.image}</div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl text-fontTitleLightMode">
                  {subjectObject?.title}
                </h1>
                <div className="text-fontTextLightMode h-max">{first.content}</div>
              </div>
            </section>
            <section className="text-fontTextLightMode">
              {subjectObject?.content.map((content, index) => (
                <div key={index}>{content.content}</div>
              ))}
            </section>
            <div className="">
              {subjectObject?.subtitles?.map((subItem, index) => {
                return (
                  <div key={index} id={subItem.slug} className="flex flex-col gap-10 scroll-mt-12">
                    <div className="text-3xl text-fontTitleLightMode">
                      {subItem.title}
                    </div>
                    <div className="text-fontTextLightMode">
                      {subItem?.content.map((content, index) => (
                        <div key={index} id={content.id} className="scroll-mt-12">{content.content}</div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
        <section className="w-3/12 flex justify-center">
          <RightSideBar subject={subjectObject}></RightSideBar>
        </section>
      </main>
    </>
  );
}

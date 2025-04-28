"use client";
import { subjects } from "../../subjects/subjects";
import React, { use, useMemo } from "react";
import LeftSideBar from "../../components/leftSideBar";
import RightSideBar from "../../components/rightSideBar";

export default function Main({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = use(params);
  console.log(subject);

  const subjectObject = useMemo(
    () => subjects.find((s) => s.id == subject),
    [subject]
  );
  const first = useMemo(
    () => subjectObject?.content.splice(0, 1),
    [subjectObject]
  );
  if (!subjectObject) return;
  return (
    <>
      <main className="w-full h-full flex">
        <section className="w-1/5">
          <LeftSideBar></LeftSideBar>
        </section>
        <section className="w-3/5 flex justify-center ">
          <section className="w-8/12 flex flex-col gap-10">
            <section className="w-full h-64 flex justify-center gap-5">
              <div>{subjectObject?.image}</div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl">{subjectObject?.title}</h1>
                <div>{first}</div>
              </div>
            </section>
            <section>
              {subjectObject?.content.map((content, index) => (
                <div key={index}>{content}</div>
              ))}
            </section>
          </section>
        </section>
        <section className="w-1/5">
          <RightSideBar></RightSideBar>
        </section>
      </main>
    </>
  );
}

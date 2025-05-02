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
    () => subjects.find((s) => s.slug == subject),
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
        <section className="w-1/6">
          <LeftSideBar></LeftSideBar>
        </section>
        <section className="w-4/6 flex justify-center pt-4">
          <section className="w-10/12 flex flex-col gap-10">
            <section className="w-full h-64 flex justify-center gap-5">
              <div>{subjectObject?.image}</div>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl text-fontTitle">{subjectObject?.title}</h1>
                <div className="text-fontText">{first}</div>
              </div>
            </section>
            <section className="text-fontText">
              {subjectObject?.content.map((content, index) => (
                <div key={index}>{content}</div>
              ))}
            </section>
          </section>
        </section>
        <section className="w-1/6">
          <RightSideBar></RightSideBar>
        </section>
      </main>
    </>
  );
}

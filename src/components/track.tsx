"use client";

import { subjects } from "@/subjects/subjects";
import { use, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function Track() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  let open = useMemo(() => false, [hovered]);
  const subjectObject = useMemo(
    () => subjects.find((s) => s.slug == pathname.split("/")[1]),
    [pathname]
  );
  return (
    <>
      <div className="flex w-2/6 text-fontText">
        {subjects.map((item, index) => {
          return (
            <div className="flex flex-col justify-center">
              <div key={index} className="flex w-full items-center">
                <a
                  href={item.slug}
                  className={
                    "size-6 rounded-full" +
                    (index >= subjectObject!.id ? " bg-details" : " bg-primary")
                  }
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                ></a>
                {index != subjects.length - 1 && (
                  <div
                    className={
                      "w-12 h-2 m-2 rounded-2xl" +
                      (index + 1 < subjectObject!.id
                        ? " bg-primary"
                        : " bg-details")
                    }
                  ></div>
                )}
              </div>
              <div className="flex justify-center">
                {hovered && (
                  <div className="w-max h-8 flex justify-center items-center bg-black p-2 rounded-2xl absolute mt-2">
                    {item.title}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

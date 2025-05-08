import { Subject } from "@/subjects/subjects";
import React from "react";

export default function LeftSideBar({ subject }: { subject: Subject }) {
  return (
    <div className="h-11/12 w-96 bg-foregroundLightMode border-2 border-detailsDarkerLightMode rounded-lg mt-3 fixed overflow-auto">
      {subject?.subtitles?.map((item, index) => {
        return (
          <div key={index} className="pt-6 pl-4 flex flex-col gap-6 mb-10">
            <a href={"#"+item.slug} className="text-fontTitleLightMode">{item.title}</a>
            <div className="h-max w-2 border-l-4 border-l-secondaryLightMode pl-6">
                <div className="flex flex-col gap-4">
                    {item.content.map((content,index)=>{
                        return(
                            <a key={index} href={"#"+content.id} className="truncate w-52 h-10 p-4 flex justify-start pl-4 items-center bg-secondaryLightMode rounded-lg text-fontTitleLightMode">
                                {content.title}
                            </a>
                        )
                    })}
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

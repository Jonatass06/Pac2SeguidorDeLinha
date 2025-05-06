import { Subject } from "@/subjects/subjects";
import React from "react";
import SearchInput from "./rightSideBarComponents/searchInput";
import ThemeSelect from "./rightSideBarComponents/themeSelect";

export default function RightSideBar({ subject }: { subject: Subject }) {


  return (
    <div className="h-11/12 w-96 bg-foreground border-2 border-detailsDarker rounded-lg mt-3 fixed">
      <div className="flex items-center flex-col gap-8">
        <SearchInput/>
        <ThemeSelect/>
      </div>
    </div>
  );
}

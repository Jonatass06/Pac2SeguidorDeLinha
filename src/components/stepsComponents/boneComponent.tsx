import { useContext } from "react";
import BoneSvg from "../../../public/boneSvg";
import ThemeContext from "@/context/ThemeContext";

export interface BoneProps {
  text: string;
  slug: string;
}

export default function BoneComponent(props: BoneProps) {
  const {actualSubject} = useContext(ThemeContext)
  return (
    <a className="flex items-center justify-center" href={"/"+props.slug}>
      <BoneSvg color={actualSubject.title == props.text ? "fill-fontTextLightMode dark:fill-fontTextDarkMode" : "fill-fontTitleLightMode dark:fill-fontTitleDarkMode"}/>
      <div className="absolute text-primaryLightMode dark:text-primaryDarkMode font-bold">
        {props.text}
      </div>
    </a>
  );
}

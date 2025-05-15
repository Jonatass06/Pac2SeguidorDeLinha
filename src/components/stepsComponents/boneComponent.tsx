import BoneSvg from "../../../public/boneSvg";

export interface BoneProps {
  text: string;
  slug: string;
}

export default function BoneComponent(props: BoneProps) {
  return (
    <a className="flex items-center justify-center" href={"/"+props.slug}>
      
      <BoneSvg />
      <div className="absolute text-primaryLightMode dark:text-primaryDarkMode font-bold">
        {props.text}
      </div>
    </a>
  );
}

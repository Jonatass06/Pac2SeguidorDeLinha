import { subjects } from "@/subjects/subjects";
import BoneComponent from "./stepsComponents/boneComponent";
import PathSteps from "../../public/pathSteps";

export default function Steps() {
  return (
    <>
      <div className="w-full h-full overflow-auto flex items-center bg-[#42424299] backdrop-blur-3xl justify-center fixed  will-change-transform  top-0 left-0 z-20 gap-5">
        <div className="">
          <PathSteps />
        </div>
        <div className="h-full w-full absolute">
          {subjects.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == 0
                    ? "absolute pl-80 pt-80 z-50"
                    : index == 1
                    ? "absolute pl-[480px] pt-[670px] z-40"
                    : index == 2
                    ? "absolute pl-[800px] pt-[235px] z-30"
                    : index == 3
                    ? "absolute pl-[1150px] pt-[550px] z-20"
                    : "absolute pl-[1400px] pt-[100px] z-10"
                }
              >
                <BoneComponent text={item.title} slug={item.slug} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

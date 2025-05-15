import { subjects } from "@/subjects/subjects";
import BoneComponent from "./stepsComponents/boneComponent";
import PathSteps from "../../public/pathSteps";

export default function Steps() {
  return (
    <>
      <div className="w-full h-full flex items-center bg-[#42424299] backdrop-blur-3xl justify-center fixed  will-change-transform  top-0 left-0 z-20 gap-5 overflow-x-hidden">
        <div className="h-full w-full relative left-[280px] top-[20px] overflow-hidden">
          <PathSteps />
        </div>
        <div className="h-full w-full absolute">
          {subjects.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == 0
                    ? "relative  2xl:top-[300px] 2xl:right-[540px] z-50"
                    : index == 1
                    ? "relative 2xl:right-[400px] 2xl:top-[530px] z-40"
                    : index == 2
                    ? "relative 2xl:right-[60px] 2xl:bottom-[10px] z-30"
                    : index == 3
                    ? "relative 2xl:left-[290px] 2xl:top-[180px] z-20"
                    : "relative 2xl:left-[540px] 2xl:bottom-[360px] z-10"
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

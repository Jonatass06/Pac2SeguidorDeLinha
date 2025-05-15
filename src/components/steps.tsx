import { subjects } from "@/subjects/subjects";
import BoneComponent from "./stepsComponents/boneComponent";
import PathSteps from "../../public/pathSteps";

export default function Steps() {
  return (
    <>
      <div className="w-full h-full overflow-auto flex items-center bg-[#42424299] backdrop-blur-3xl justify-center fixed  will-change-transform  top-0 left-0 z-20 gap-5">
        <div className="*:w-full *:h-full">
          <PathSteps />
        </div>
        <div className="h-full w-full absolute">
          {subjects.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == 0
                    ? "absolute 2xl:left-[15vw] 2xl:top-[32vh] xl:left-[4vw] xl:top-[32vh] lg:left-[2vw] lg:top-[32vh] md:left-[2vw] md:top-[32vh] sm:left-[2vw] sm:top-[32vh] z-50"
                    : index == 1
                    ? "absolute 2xl:left-[25vw] 2xl:top-[70vh] xl:left-[18vw] xl:top-[70vh] lg:left-[16vw] lg:top-[70vh] md:left-[14vw] md:top-[63vh] sm:left-[12vw] sm:top-[63vh] z-40"
                    : index == 2
                    ? "absolute 2xl:left-[43vw] 2xl:top-[23vh] xl:left-[40vw] xl:top-[23vh] lg:left-[38vw] lg:top-[23vh] md:left-[36vw] md:top-[28vh] sm:left-[36vw] sm:top-[28vh] z-30"
                    : index == 3
                    ? "absolute 2xl:left-[62vw] 2xl:top-[66vh] xl:left-[63vw] xl:top-[66vh] lg:left-[64vw] lg:top-[66vh] md:left-[64vw] md:top-[66vh] sm:left-[64vw] sm:top-[66vh] z-20"
                    : "absolute 2xl:left-[70vw] 2xl:top-[10vh] xl:left-[68vw] xl:top-[10vh] lg:left-[68vw] lg:top-[10vh] md:left-[68vw] md:top-[18vh] sm:left-[68vw] sm:top-[18vh] z-10"
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

import React from "react";
import skillsData from "../data/skillsData";

export default function Skills() {
  let webTechSkill = skillsData.filter(
    (skill) => skill.skillCategory === "Web Technology"
  );
  let DevToolSkill = skillsData.filter(
    (skill) => skill.skillCategory === "Developer Tools"
  );
  return (
    <div className="pt-30 flex flex-col items-center pb-20">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-10">
          <div className="w-[100vw] text-center flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Web Technologies</h1>
            <hr className=" border-gray-400 w-[100%]" />
          </div>

          <div className="flex justify-center items-center gap-10 flex-wrap ">
            {webTechSkill.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center shadow-xl gap-2 p-2"
                  key={index}
                >
                  <img
                    className="size-40"
                    src={item.skillImage}
                    alt={item.skillName}
                  />
                  <h2 className="font-bold">{item.skillName}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div className="w-[100vw] text-center flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Developer Tools</h1>
            <hr className=" border-gray-400 w-[100%]" />
          </div>
          <div className="flex justify-center items-center gap-10 flex-wrap ">
            {DevToolSkill.map((item, index) => {
              return (
                <div
                  className="flex flex-col items-center shadow-xl gap-2 p-2"
                  key={index}
                >
                  <img
                    className="size-40"
                    src={item.skillImage}
                    alt={item.skillName}
                  />
                  <h2 className="font-bold">{item.skillName}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

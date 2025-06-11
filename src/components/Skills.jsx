import React from "react";
import skillsData from "../data/skillsData";

export default function Skills() {
  const webTechSkill = skillsData.filter(
    (skill) => skill.skillCategory === "Web Technology"
  );
  const DevToolSkill = skillsData.filter(
    (skill) => skill.skillCategory === "Developer Tools"
  );

  return (
    <div className="pt-28 flex flex-col items-center pb-20 px-4">
      <div className="flex flex-col items-center gap-14 w-full">
       
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="text-center w-full flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Web Technologies</h1>
            <hr className="border-gray-400 w-full" />
          </div>

          
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-6 sm:gap-8">
            {webTechSkill.map((item, index) => (
              <div
                className="flex flex-col items-center shadow-xl gap-2 p-2"
                key={index}
              >
                <img
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  src={item.skillImage}
                  alt={item.skillName}
                />
                <h2 className="text-sm sm:text-base font-bold">{item.skillName}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools Section */}
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="text-center w-full flex flex-col gap-2">
            <h1 className="text-2xl sm:text-3xl font-bold">Developer Tools</h1>
            <hr className="border-gray-400 w-full" />
          </div>

         
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center items-center gap-6 sm:gap-8">
            {DevToolSkill.map((item, index) => (
              <div
                className="flex flex-col items-center shadow-xl gap-2 p-2"
                key={index}
              >
                <img
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40"
                  src={item.skillImage}
                  alt={item.skillName}
                />
                <h2 className="text-sm sm:text-base font-bold">{item.skillName}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

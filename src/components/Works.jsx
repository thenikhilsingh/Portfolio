import React from "react";
import worksData from "../data/worksData";

export default function Works() {
  return (
    <div className="pt-40 flex flex-wrap items-center justify-around gap-15 pb-20">
      {worksData.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center gap-5">
            <div className="relative group shadow-2xl p-2 bg-gray-400 rounded overflow-hidden hover:scale-105 transition-all duration-500">
              <img
                className="w-130 rounded transition-opacity duration-300 group-hover:opacity-30"
                src={item.thumbnail}
                alt={item.title}
              />

              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={item.demo} target="_blank">
                  <button className="bg-[#2da0f1] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#7acedd]">
                    Demo
                  </button>
                </a>
                <a href={item.code} target="_blank">
                  <button className="bg-[#2da0f1] text-white font-bold px-6 py-2 rounded shadow hover:bg-[#7acedd]">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <h1 className="font-bold text-xl">{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

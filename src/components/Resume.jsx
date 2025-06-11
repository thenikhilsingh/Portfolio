import React, { useState } from "react";
import resumeData from "../data/resumeData";
import { motion, AnimatePresence } from "framer-motion";

export default function Resume() {
  const [expIndex, setExpIndex] = useState(0);
  const [eduIndex, setEduIndex] = useState(0);

  const exp = resumeData.experience[expIndex];
  const edu = resumeData.education[eduIndex];

  const animation = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.4 },
  };

  return (
    <div className="pt-28 pb-20 px-4 flex flex-col md:flex-row gap-10 md:justify-around items-center bg-white">
      {/* Experience Section */}
      <div className="w-full max-w-[450px]">
        <h1 className="text-xl font-bold border-black border-2 rounded-lg py-2 text-center">
          Experience
        </h1>
        <div className="border-pink-500 border-2 rounded-lg p-4 min-h-[400px] flex flex-col justify-between mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={expIndex}
              {...animation}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <h1 className="font-bold text-xl md:text-2xl">{exp.orgName}</h1>
                <h2 className="text-gray-600 font-bold">{exp.role}</h2>
                <h3 className="text-[#FFB000] font-bold">{exp.duration}</h3>
                <ul className="mt-2 list-disc px-5 text-sm md:text-base">
                  {exp.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-pink-500 text-white px-4 py-1 rounded disabled:opacity-50"
                  onClick={() => setExpIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={expIndex === 0}
                >
                  Prev
                </button>
                <button
                  className="bg-pink-500 text-white px-4 py-1 rounded disabled:opacity-50"
                  onClick={() =>
                    setExpIndex((prev) =>
                      Math.min(prev + 1, resumeData.experience.length - 1)
                    )
                  }
                  disabled={expIndex === resumeData.experience.length - 1}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-[450px]">
        <h1 className="text-xl font-bold border-black border-2 rounded-lg py-2 text-center">
          Education
        </h1>
        <div className="border-pink-500 border-2 rounded-lg p-4 min-h-[400px] flex flex-col justify-between mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={eduIndex}
              {...animation}
              className="flex flex-col justify-between h-full"
            >
              <div>
                <h1 className="font-bold text-xl md:text-2xl">{edu.qualification}</h1>
                <h2 className="text-gray-600 font-bold">{edu.Institue}</h2>
                <h3 className="text-[#FFB000] font-bold">{edu.duration}</h3>
                <p className="mt-2 text-justify px-2 text-sm md:text-base">{edu.details}</p>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-pink-500 text-white px-4 py-1 rounded disabled:opacity-50"
                  onClick={() => setEduIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={eduIndex === 0}
                >
                  Prev
                </button>
                <button
                  className="bg-pink-500 text-white px-4 py-1 rounded disabled:opacity-50"
                  onClick={() =>
                    setEduIndex((prev) =>
                      Math.min(prev + 1, resumeData.education.length - 1)
                    )
                  }
                  disabled={eduIndex === resumeData.education.length - 1}
                >
                  Next
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import {
  backendTechnologies,
  frontendTechnologies,
  details,
  careerDetails,
} from "../data/aboutData.js";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  const words = ["Front-End Development", "Back-End Development"];

  const TYPING_SPEED = 70;
  const DELETING_SPEED = 45;
  const HOLD_ON_WORD = 900;
  const HOLD_BEFORE_NEXT = 350;

  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = deleting ? DELETING_SPEED : TYPING_SPEED;

    if (!deleting && subIndex === currentWord.length) {
      delay = HOLD_ON_WORD;
    }

    if (deleting && subIndex === 0) {
      delay = HOLD_BEFORE_NEXT;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (subIndex < currentWord.length) {
          setSubIndex((s) => s + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
        } else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, wordIndex, words]);

  const text = words[wordIndex].slice(0, subIndex);

  return (
    <div className="size-full overflow-auto scrollbar-hide ">
      <div className="flex">
        <div className="w-[30%] h-[1140px]  bg-[#AAAAAA] bg-[url(img-about.png)] bg-[center_60%] bg-contain bg-no-repeat flex flex-col justify-between items-center p-11">
          <div className="bg-black text-white text-4xl font-bold p-3">
            NIKHIL SINGH
          </div>
          <div className="flex flex-col gap-10 pb-10">
            <h1 className="text-white font-bold text-5xl text-center">Ready to discuss your project?</h1>
            <div> 
              <p className="text-white font-bold text-[15px] text-center">Let's super-charge your business today!</p>
              <div className="relative text-black mt-4">
                <div className="h-13 w-70 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute top-0 left-0"></div>
                <div className="h-13 w-70 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <a href="">Get a Free Price Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] h-[1140px]  bg-[#222225] ">
          <div className="p-10">
            <h1 className="text-white font-bold text-4xl">
              I'm Specialized in
            </h1>
            <div className="flex items-center">
              <Icon path={mdiChevronRight} size={2} color="#9898a8" />
              <div className=" text-[#A4F025]">
                <div className="text-center">
                  <h1 className="text-3xl  font-semibold ">
                    {text}
                    <span className="blink text-gray-300">_</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2px] bg-[#3F3F46] shadow-xl/30">
            <div className="bg-[#1E1E21] p-10 flex flex-col justify-around h-45">
              <div className="text-xl text-white border-l-2 border-l-[#A4F025] pl-4 flex items-center">
                Back-End Development
              </div>
              <div className="width-full  grid grid-cols-3">
                {backendTechnologies.map((tech, i) => (
                  <div className="flex">
                    <div
                      data-aos="fade-right"
                      data-aos-delay={i * 200}
                      key={i}
                      className="flex justify-between items-center w-55"
                    >
                      <div className="flex gap-2">
                        <img className="size-7" src={tech.logo} alt="" />
                        <h1 className="text-white font-bold">{tech.name}</h1>
                      </div>
                      <div className="flex gap-[1px] w-18 h-4 ">
                        {tech.rate.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-[20%] "
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1E1E21] p-10 flex flex-col justify-around h-50 gap-6">
              <div className="text-xl text-white border-l-2 border-l-[#A4F025] pl-4 flex items-center">
                Front-End Development
              </div>
              <div className="width-full grid grid-cols-3">
                {frontendTechnologies.map((tech, i) => (
                  <div className="flex">
                    <div
                      data-aos="fade-right"
                      data-aos-delay={i * 200}
                      key={i}
                      className="flex justify-between items-center w-55"
                    >
                      <div className="flex gap-2">
                        <img className="size-7" src={tech.logo} alt="" />
                        <h1 className="text-white font-bold">{tech.name}</h1>
                      </div>
                      <div className="flex gap-[1px] w-18 h-4 ">
                        {tech.rate.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-[20%] "
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="p-10">
            {details.map((detail) => (
              <div className="flex flex-col justify-around h-42">
                <h1 className="flex text-2xl font-bold gap-2">
                  <span className="text-[#9CA3AF]">{detail.serialNo}</span>
                  <span className="text-white">{detail.heading}</span>
                </h1>
                <p className="text-xl text-[#a4a4ad]">{detail.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white w-full flex justify-around p-10">
        {careerDetails.map((section, idx) => (
          <div key={idx} className="w-[40%] flex flex-col">
            <div className="flex flex-col  gap-10 justify-between h-full">
              <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold">{section.heading}</h1>
                {
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="bg-[#A3F026] w-full h-[6px]"
                  />
                }
              </div>
              <div className="flex flex-col gap-5 flex-grow justify-between">
                {section.details.map((item, i) => (
                  <div key={i}>
                    <div className="flex flex-col gap-5">
                      <div className="flex justify-between">
                        <div className="text-xl font-medium">
                          {item.OrgName}
                        </div>
                        <div className="text-lg font-medium text-[#888D97]">
                          {item.duration}
                        </div>
                      </div>
                      <div className="text-lg">{item.role}</div>
                    </div>
                    <hr className="border-0 border-t border-[#c2c2cc] mt-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

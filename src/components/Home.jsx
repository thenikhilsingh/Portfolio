import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import TypingNameAnimation from "./TypingNameAnimation";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  const code = `const services = [
     'UI/UX Design'
     'Web Development'
     'Mobile App Development'
    ]
    if (have_a_project) navigate('/contact')`;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div className="size-full  bg-[linear-gradient(90deg,#1F1F22_0%,#1F1F22_70%,rgba(231,255,135,1)_70%,rgba(207,254,25,1)_85%,rgba(107,222,53,1)_100%)] p-15 flex flex-col gap-5 overflow-auto scrollbar-hide relative">
      <div data-aos="fade-right" className="flex items-center w-[70%]">
        <Icon path={mdiChevronRight} size={3.5} color="#9898a8" />
        <TypingNameAnimation
          text="Nikhil Singh"
          initialDelay={2000}
          typeSpeed={120}
        />
      </div>
      <div data-aos="fade-right" className="text-6xl font-[700] w-[70%]">
        <span className="txt-gradient">Web Developer</span>{" "}
        <span className="text-[#9898a8] tasa-explorer">&</span>{" "}
        <span className="txt-gradient">Software Engineer</span>
      </div>
      <p data-aos="fade-right" className="text-[#A4A7AB] text-xl w-[60%]">
        As a web developer, I believe in simplicity and functionality. My work
        is about turning concepts into smooth, interactive websites where clean
        code meets thoughtful design.
      </p>
      <pre data-aos="fade-right" className="p-4 w-[45%] text-sm shadow-lg">
        <code className="language-js">{code}</code>
      </pre>
      <div>
        <div className="bg-[#222225] flex justify-around shadow-lg p-6 absolute w-[90%]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold text-white">1+</h1>
              <p className="text-[#5EA0F2]">Years of Experience</p>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold text-white">27</h1>
              <p className="text-[#5EA0F2]">OpenSource Libraries</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold text-white">21+</h1>
              <p className="text-[#5EA0F2]">Projects Completed</p>
            </div>
            <div className="flex items-center gap-4">
              <h1 className="text-5xl font-bold text-white">10+</h1>
              <p className="text-[#5EA0F2]">Clients World Wide</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 mt-3">
            <div>
              <div className="h-13 w-45 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute"></div>
              <div className="h-13 w-45 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
                <a href="">Download Resume</a>
              </div>
            </div>
            <div className="text-white text-lg ">
              <a className="gradient-underline" href="">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

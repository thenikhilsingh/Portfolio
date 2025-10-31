import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import TypingNameAnimation from "./TypingNameAnimation";
import AOS from "aos";
import "aos/dist/aos.css";
import { CodeBlock } from "./ui/code-block";
import { NavLink } from "react-router-dom";

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

  return (
    <div className="size-full bg-[#1F1F22] md:bg-[linear-gradient(90deg,#1F1F22_0%,#1F1F22_70%,rgba(231,255,135,1)_70%,rgba(207,254,25,1)_85%,rgba(107,222,53,1)_100%)] md:p-15 flex flex-col items-center md:items-start gap-5 overflow-auto scrollbar-hide relative">
      <div className="mt-10 md:hidden">
        <img className="size-50" src="/img-home-mobile.png" alt="" />
      </div>
      <div data-aos="fade-right" className="flex justify-center md:justify-start items-center w-full md:w-[70%]">
        <Icon className="hidden md:block" path={mdiChevronRight} size={3.5} color="#9898a8" />
        <TypingNameAnimation
          text="Nikhil Singh"
          initialDelay={2000}
          typeSpeed={120}
        />
      </div>
      <div data-aos="fade-right" className="text-4xl md:text-5xl lg:text-6xl font-[700] text-center lg:text-left md:w-[70%]">
        <span className="txt-gradient">Web Developer</span>{" "}
        <span className="text-[#9898a8] tasa-explorer">&</span>{" "}
        <span className="txt-gradient">Software Engineer</span>
      </div>
      <p data-aos="fade-right" className="text-[#A4A7AB] text-xl w-[60%] hidden md:block">
        As a web developer, I believe in simplicity and functionality. My work
        is about turning concepts into smooth, interactive websites where clean
        code meets thoughtful design.
      </p>
      <CodeBlock language="javascript" highlightLines={[2, 3, 4]} code={code} />

      <div className="w-full md:absolute md:bottom-40 lg:bottom-20 xl:bottom-50">
        <div className="relative left-[48%] hidden md:block">
          <img className=" w-[42%]" src="img-home.png" alt="" />
        </div>
          <div className="w-full md:w-[90%] bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] h-[1px] hidden md:block xl:hidden"></div>
        <div className="md:bg-[#222225] flex md:flex-col xl:flex-row md:items-center xl:items-start md:gap-10 xl:gap-0 justify-center sm:justify-around shadow-lg p-6 absolute md:w-[90%] w-full">
          <div className="flex sm:gap-10">
          <div className="flex flex-col gap-5">
            <div className=" flex-col md:flex-row items-center hidden sm:flex gap-4">
              <h1 className="text-2xl mb:text-5xl font-bold text-white">1+</h1>
              <p className="text-[#5EA0F2]">Years of Experience</p>
            </div>
            <div className=" hidden sm:flex  flex-col md:flex-row items-center gap-4">
              <h1 className="text-2xl mb:text-5xl font-bold text-white">27</h1>
              <p className="text-[#5EA0F2]">OpenSource Libraries</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className=" hidden sm:flex  flex-col md:flex-row items-center gap-4">
              <h1 className="text-2xl mb:text-5xl font-bold text-white">21+</h1>
              <p className="text-[#5EA0F2]">Projects Completed</p>
            </div>
            <div className=" hidden sm:flex  flex-col md:flex-row items-center gap-4">
              <h1 className="text-2xl mb:text-5xl font-bold text-white">10+</h1>
              <p className="text-[#5EA0F2]">Clients World Wide</p>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center gap-5 mt-3">
            <div>
              <div className="h-13 w-45 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute"></div>
              <div className="h-13 w-45 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
                <a href="/Resume.pdf" download="Nikhil_Singh_Resume.pdf">
                  Download Resume
                </a>
              </div>
            </div>
            <NavLink to="/contact">
              <div className="text-white text-lg ">
                <a className="gradient-underline" href="">
                  Get in Touch
                </a>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

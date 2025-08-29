import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";

export default function Home() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const code = `
    const services = [
    'Frontend Development'
    'Backend Development'
    ]
    if (have_a_project) navigate('/contact')
    `;
  return (
    <div className="size-full flex flex-col justify-center items-center">
      <div className="h-[90%] w-[65%] flex">
        <div className="w-[70%] h-full bg-[#1F1F22] p-15 flex flex-col gap-5">
          <div className="flex items-center">
            <Icon path={mdiChevronRight} size={3.5} color="#9898a8" />
            <div className="text-white text-5xl roboto-mono font-[700]">
              Nikhil Singh
              <span className="blinking-underscore">_</span>
            </div>
          </div>
          <div className="text-6xl font-[700]">
            <span className="txt-gradient">Web Developer</span>{" "}
            <span className="text-[#9898a8] tasa-explorer">&</span>{" "}
            <span className="txt-gradient">Software Engineer</span>
          </div>
          <p className="text-white text-xl w-[85%]">
            As a web developer, I believe in simplicity and functionality. My
            work is about turning concepts into smooth, interactive websites
            where clean code meets thoughtful design.
          </p>
          <pre className="rounded-xl p-4 bg-black w-[70%] text-sm overflow-x-auto shadow-lg">
            <code className="language-js">{code}</code>
          </pre>
        </div>
        <div className="w-[30%] h-full bg-[linear-gradient(120deg,rgba(231,255,135,1)_0%,rgba(207,254,25,1)_50%,rgba(107,222,53,1)_100%)]"></div>
      </div>
    </div>
  );
}

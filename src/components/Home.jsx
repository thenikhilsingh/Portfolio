import Icon from "@mdi/react";
import { mdiDownload } from "@mdi/js";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.webp";
import facebook from "../assets/facebook.webp";
import twitter from "../assets/twitter.png";
import myImage from "../assets/myImage.png";
import FullStackDeveloper from "../assets/Full Stack Developer.png";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-wrap-reverse sm:flex-col-reverse md:flex-row md:flex-nowrap justify-around items-center pt-15 sm:pt-20 pb-10 bg-[#8EFDFD] px-4">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl lg:text-5xl  text-center font-bold">Hello, I'm Nikhil Singh</h1>
        <TypeAnimation
          sequence={["Web Developer", 2000, "Software Engineer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-4xl text-[#F1C604] font-bold"
        />
        <p className="text-sm text-gray-700">
          B.Tech | CSE Branch | Abdul Kalam Technical University
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-black text-base sm:text-xl text-white px-6 sm:px-8 py-2 rounded-lg">
            About Me
          </button>
          <button className="flex justify-center items-center bg-white text-base sm:text-xl px-6 sm:px-8 py-2 rounded-lg">
            Resume <Icon path={mdiDownload} size={0.8} className="ml-2" />
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 sm:gap-8">
          <a href=""><img className="w-6 sm:w-8" src={github} alt="" /></a>
          <a href=""><img className="w-6 sm:w-8" src={linkedin} alt="" /></a>
          <a href=""><img className="w-6 sm:w-8" src={instagram} alt="" /></a>
          <a href=""><img className="w-6 sm:w-8" src={facebook} alt="" /></a>
          <a href=""><img className="w-6 sm:w-8" src={twitter} alt="" /></a>
        </div>
      </div>

      <div className="relative">
        <img className="size-50 sm:size-70 lg:size-90" src={myImage} alt="" />
        <img
          className="size-10 sm:size-12 lg:size-16 absolute bottom-2 sm:bottom-3 lg:bottom-5 right-6 sm:right-9 animate-spin"
          style={{ animationDuration: "5s" }}
          src={FullStackDeveloper}
          alt=""
        />
      </div>
    </div>
  );
}

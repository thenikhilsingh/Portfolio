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
    <div className="flex justify-around items-center h-[100vh] bg-[#8EFDFD] ">
      <div className="flex flex-col gap-5">
        <h1 className="text-5xl font-bold">Hello, I'm Nikhil Singh</h1>
        <TypeAnimation
          sequence={["Web Developer", 2000, "Software Engineer", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-4xl text-[#F1C604] font-bold"
        />
        <p className="text-xl text-gray-700">
          B.Tech | CSE Branch | Abdul Kalam Technical University
        </p>
        <div className="flex gap-5">
          <button className="bg-black text-xl text-white  px-8 py-2 rounded-lg">
            About Me
          </button>
          <button className="flex justify-center items-center bg-white text-xl  px-8 py-2 rounded-lg">
            Resume <Icon path={mdiDownload} size={1} />
          </button>
        </div>
        <div className="flex gap-8">
          <a href="">
            <img className="size-8" src={github} alt="" />
          </a>
          <a href="">
            <img className="size-8" src={linkedin} alt="" />
          </a>
          <a href="">
            <img className="size-8" src={instagram} alt="" />
          </a>
          <a href="">
            <img className="size-8" src={facebook} alt="" />
          </a>
          <a href="">
            <img className="size-8" src={twitter} alt="" />
          </a>
        </div>
      </div>

      <div className="relative">
        <img className="size-96" src={myImage} alt="" />
        <img
          className="size-20 absolute bottom-3 right-10 animate-spin"
          style={{ animationDuration: "5s" }}
          src={FullStackDeveloper}
          alt=""
        />
      </div>
    </div>
  );
}

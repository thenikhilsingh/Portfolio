import { NavLink } from "react-router-dom";
import moon from "../assets/moon.svg";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-10  w-[100vw] h-[15vh] bg-[#8EFDFD] fixed z-10">
      <NavLink to="/">
        <div className="text-2xl font-bold">Nikhil Singh</div>
      </NavLink>

      <div className="flex items-center gap-10 text-xl ">
        <NavLink to="/">
          <div className="hover:text-[#FFB000]">Home</div>
        </NavLink>
        <NavLink to="/skills">
          <div className="hover:text-[#FFB000]">Skills</div>
        </NavLink>
        <NavLink to="/works">
          <div className="hover:text-[#FFB000]">Works</div>
        </NavLink>
        <NavLink to="/resume">
          <div className="hover:text-[#FFB000]">Resume</div>
        </NavLink>
        <NavLink to="/contact">
          <div className="hover:text-[#FFB000]">Contact</div>
        </NavLink>
        <div>
          <img className="size-8" src={moon} alt="" />
        </div>
      </div>
    </div>
  );
}

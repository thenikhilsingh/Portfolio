import { NavLink } from "react-router-dom";
import moon from "../assets/moon.svg";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex justify-between items-center px-10 w-[100vw] h-[15vh] fixed z-10 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-xl" : "bg-[#8EFDFD]"
      }`}
    >
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

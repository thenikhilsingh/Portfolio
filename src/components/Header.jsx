import { NavLink } from "react-router-dom";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";
import { useState, useEffect, useContext } from "react";
import { darkModeContext } from "../App";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, setDarkMode } = useContext(darkModeContext);

  function handleClick() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex flex-wrap justify-between items-center px-4  py-2 sm:py-5 w-full fixed z-10 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-xl" : "bg-[#8EFDFD]"
      }`}
    >
      <NavLink to="/">
        <div className="text-sm sm:text-lg md:text-2xl font-bold">Nikhil Singh</div>
      </NavLink>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-8 text-[10px] sm:text-base md:text-lg lg:text-base">
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
          <img
            onClick={handleClick}
            className="w-4 sm:w-5 md:w-6 cursor-pointer"
            src={darkMode ? sun : moon}
            alt="toggle theme"
          />
        </div>
      </div>
    </div>
  );
}

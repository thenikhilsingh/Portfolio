import React, { useState } from "react";
import Icon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiAccountOutline,
  mdiToolboxOutline,
  mdiTrophyVariantOutline,
  mdiEmailOutline,
  mdiGithub,
  mdiInstagram,
  mdiLinkedin,
  mdiDotsHorizontal,
} from "@mdi/js";
import { NavLink } from "react-router-dom";

const NavItems = [
  { name: "Home", to: "/", icon: mdiHomeOutline },
  { name: "About", to: "/about", icon: mdiAccountOutline },
  { name: "Services", to: "/services", icon: mdiToolboxOutline },
  { name: "More", to: "#", icon: mdiDotsHorizontal },
];

const MoreItems = [
     { name: "Home", to: "/", icon: mdiHomeOutline },
  { name: "About", to: "/about", icon: mdiAccountOutline },
  { name: "Services", to: "/services", icon: mdiToolboxOutline },
  { name: "Projects", to: "/projects", icon: mdiTrophyVariantOutline },
  { name: "Contact", to: "/contact", icon: mdiEmailOutline },
];

const NavSocials = [
  { link: "https://github.com/thenikhilsingh", icon: mdiGithub },
  {
    link: "https://www.instagram.com/_thakurnikhilsingh_/",
    icon: mdiInstagram,
  },
  {
    link: "https://www.linkedin.com/in/nikhil-singh-7432b827a/",
    icon: mdiLinkedin,
  },
];

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[linear-gradient(90deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] flex flex-col justify-between items-center w-full md:hidden fixed bottom-0 z-50">
      {/* Main Nav */}
      <div className="flex">
        {NavItems.map((item) => (
          <div key={item.name} className="group flex relative">
            <button
              onClick={() =>
                item.name === "More" && setIsMenuOpen(!isMenuOpen)
              }
            >
              <NavLink
                to={item.name === "More" ? "#" : item.to}
                className={({ isActive }) =>
                  isActive
                    ? "w-26 sm:w-40 h-15 flex flex-col justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
                    : "w-26 sm:w-40  h-15 flex flex-col justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white relative hover:bg-[#3B82F6] transition-colors duration-500"
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      path={item.icon}
                      size={1.3}
                      color={isActive ? "black" : "white"}
                    />
                    <div
                      className={`text-md font-bold ${
                        isActive ? "text-black" : "text-white"
                      }`}
                    >
                      {item.name}
                    </div>
                  </>
                )}
              </NavLink>
            </button>
          </div>
        ))}
      </div>

      {/* Expanded Menu */}
      <div
        className={`absolute bottom-[60px] left-0 w-full bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] p-4 grid grid-cols-3 gap-4 text-center transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {MoreItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            onClick={() => setIsMenuOpen(false)}
            className="flex flex-col items-center text-white hover:text-[#91EA2A]"
          >
            <Icon path={item.icon} size={1.3} />
            <span className="text-sm">{item.name}</span>
          </NavLink>
        ))}

        {/* Social icons */}
        <div className="col-span-3 flex justify-center space-x-4 mt-3">
          {NavSocials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#91EA2A]"
            >
              <Icon path={social.icon} size={1.2} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

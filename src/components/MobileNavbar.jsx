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
  mdiChevronDown, // ↓ For close arrow
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
    <div className="fixed bottom-0 w-full z-50 md:hidden">
      {/* Background Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/90  transition-opacity duration-500"
        ></div>
      )}

      {/* Expanded Menu */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] pt-4 grid grid-cols-3 gap-4 text-center  shadow-2xl transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        {/* Close Arrow */}
        {isMenuOpen && (
          <div className="col-span-3 flex justify-center">
            <button
              onClick={() => setIsMenuOpen(false)}
            >
              <Icon path={mdiChevronDown} size={3} color="white" />
            </button>
          </div>
        )}

        {/* Menu Links */}
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
        <div className="col-span-3 flex justify-center space-x-4 mt-3 p-3 bg-[#2986FF] ">
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

      {/* Main Nav — hidden when expanded */}
      {!isMenuOpen && (
        <div className="bg-[linear-gradient(90deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] flex justify-between items-center shadow-[0_-2px_10px_rgba(0,0,0,0.4)]">
          {NavItems.map((item) => (
            <div key={item.name} className="group flex relative flex-1">
              <button
                onClick={() =>
                  item.name === "More" && setIsMenuOpen(!isMenuOpen)
                }
                className="w-full"
              >
                <NavLink
                  to={item.name === "More" ? "#" : item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "h-16 flex flex-col justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
                      : "h-16 flex flex-col justify-center items-center text-white relative hover:bg-[#3B82F6] transition-colors duration-500"
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
                        className={`text-sm font-semibold ${
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
      )}
    </div>
  );
}

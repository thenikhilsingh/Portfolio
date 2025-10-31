import React from "react";
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
  { name: "", to: "/more", icon: mdiDotsHorizontal },
  //   { name: "Projects", to: "/projects", icon: mdiTrophyVariantOutline },
  //   { name: "Contact", to: "/contact", icon: mdiEmailOutline },
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
  return (
    <div className="bg-[linear-gradient(90deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] flex flex-col justify-between items-center w-full md:hidden fixed bottom-0">
      <div className="flex">
        {NavItems.map((item) => (
          <div key={item.name} className="group flex relative">
            <NavLink
              to={item.to}
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
                  {!isActive ?<div className=" text-white  text-md font-bold">{item.name}</div>:<div className=" text-black text-md font-bold ">{item.name}</div>}
                </>
              )}
            </NavLink>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-col bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)]">
        {NavSocials.map((social) => (
          <a
            href={social.link}
            target="_blank"
            className="w-[100%] h-15 flex justify-center items-center text-white hover:text-[#91EA2A]"
          >
            <Icon path={social.icon} size={1.3} />
          </a>
        ))}
      </div> */}
    </div>
  );
}

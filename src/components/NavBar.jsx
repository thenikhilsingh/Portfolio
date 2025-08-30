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
} from "@mdi/js";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-[linear-gradient(90deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] flex flex-col justify-between w-[5%] h-[87%]">
      <div className="flex flex-col">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
              : "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white"
          }
        >
          <Icon path={mdiHomeOutline} size={1.3} />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
              : "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white"
          }
        >
          <Icon path={mdiAccountOutline} size={1.3} color={"white"} />
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
              : "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white"
          }
        >
          <Icon path={mdiToolboxOutline} size={1.3} color={"white"} />
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
              : "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white"
          }
        >
          <Icon path={mdiTrophyVariantOutline} size={1.3} color={"white"} />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(210deg,rgba(231,255,135,1)0%,rgba(207,254,25,1)_0%,rgba(107,222,53,1)_100%)] text-black"
              : "w-[100%] h-15 flex justify-center items-center bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)] text-white"
          }
        >
          <Icon path={mdiEmailOutline} size={1.3} color={"white"} />
        </NavLink>
      </div>
      <div className="flex flex-col bg-[linear-gradient(180deg,rgb(26,26,29)_0%,rgb(29,29,32)_100%)]">
        <a
          href="https://github.com/thenikhilsingh"
          target="_blank"
          className="w-[100%] h-15 flex justify-center items-center text-white hover:text-[#91EA2A]"
        >
          <Icon path={mdiGithub} size={1.3} />
        </a>
        <a
          href="https://www.instagram.com/_thakurnikhilsingh_/"
          target="_blank"
          className="w-[100%] h-15 flex justify-center items-center text-white hover:text-[#91EA2A]"
        >
          <Icon path={mdiInstagram} size={1.3} />
        </a>
        <a
          href="https://www.linkedin.com/in/nikhil-singh-7432b827a/"
          target="_blank"
          className="w-[100%] h-15 flex justify-center items-center text-white hover:text-[#91EA2A]"
        >
          <Icon path={mdiLinkedin} size={1.3} />
        </a>
      </div>
    </div>
  );
}

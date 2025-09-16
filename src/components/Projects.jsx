import Icon from "@mdi/react";
import { mdiStarOutline, mdiSourceFork } from "@mdi/js";
import { ospDetails, lpDetails } from "../data/projectsData";
import { useState } from "react";
import "aos/dist/aos.css";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? ospDetails : ospDetails.slice(0, 3);

  function handleClick() {
    showAll ? setShowAll(false) : setShowAll(true);
  }

  return (
    <div className="size-full overflow-auto scrollbar-hide">
      <div className="bg-[#212124] text-white size-full p-10 flex flex-col gap-15 h-fit">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">My Open-Source Projects</h1>
          <p className="text-lg text-[#D1D5DB]">
            Discover my most popular open-source projects on Github.
          </p>
          <div className="flex flex-wrap items-center gap-10">
            {visibleProjects.map((detail, i) => (
              <a
                data-aos="fade-up"
                data-aos-delay={i * 200}
                target="_blank"
                href={detail.link}
              >
                <div className=" text-black text-md font-medium w-[340px] h-40 group">
                  <div className="bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] p-5 h-[85%] flex flex-col gap-2">
                    <div className="text-2xl">
                      {detail.hostingPlatform}
                      <span className="text-[#3B82F6]">{detail.name}</span>
                    </div>
                    <div>{detail.information}</div>
                  </div>
                  <div className="flex justify-around items-center bg-white group-hover:text-white group-hover:bg-[#2c2c2c] px-5 py-3 h-[30%] border-t border-green-500">
                    <div>{detail.code}</div>
                    <div className="flex">
                      <Icon path={mdiStarOutline} size={1} color={"#EAB308"} />
                      <div>{detail.stars}</div>
                    </div>
                    <div className="flex">
                      <Icon path={mdiSourceFork} size={1} color={"#22C55E"} />
                      <div>{detail.forks}</div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <div className="relative text-black mt-4 w-full flex justify-center">
            <div className="h-13 w-60 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute top-0 left-[50]"></div>
            <div className="h-13 w-60 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
              <button onClick={handleClick}>
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">Latest Projects</h1>
          <p className="text-lg text-[#D1D5DB]">
            I have transformed ideas into remarkable digital products.
          </p>
          {lpDetails.map((detail) => (
            <div>
              <div className="bg-[#242427] flex p-10 gap-10 group">
                <div className="w-[50%] relative flex items-center group-hover:scale-[104%] transition-all duration-500 ease-out">
                  <div className="absolute right-0">
                    <img
                      className="h-[280px] shadow-2xl/30"
                      src={detail.mobileImg}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <img src={detail.desktopImg} alt="" />
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-5">
                  <h1 className="text-xl">
                    <img className="h-10" src={detail.logo} alt="" />
                  </h1>
                  <h1 className="text-3xl font-bold group-hover:text-[#D5FF00]">
                    {detail.projectName}
                  </h1>
                  <p className="text-lg ">{detail.projectInformation}</p>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-[#5696d6] text-lg font-bold">
                      Technologies
                    </h1>
                    <div className="flex gap-3">
                      {detail.technologies.map((technology) => (
                        <div className="bg-[#21322A] text-[#22C55E] px-2 py-1 text-lg">
                          {technology}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between w-90">
                    <div className="flex flex-col gap-5">
                      <div>
                        <h1 className="text-[#5696d6] text-lg font-bold">
                          Duration
                        </h1>
                        <p>{detail.duration}</p>
                      </div>
                      <div>
                        <h1 className="text-[#5696d6] text-lg font-bold">
                          Status
                        </h1>
                        <p>{detail.status}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <div>
                        <h1 className="text-[#5696d6] text-lg font-bold">
                          Role
                        </h1>
                        <p>{detail.role}</p>
                      </div>
                      <div>
                        <h1 className="text-[#5696d6] text-lg font-bold">
                          Technology
                        </h1>
                        <p>{detail.technology}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

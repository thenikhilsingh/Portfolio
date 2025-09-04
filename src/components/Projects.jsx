import Icon from "@mdi/react";
import { mdiStarOutline, mdiSourceFork } from "@mdi/js";

const ospDetails = [
  {
    link: "https://github.com/thenikhilsingh/Portfolio",
    hostingPlatform: "Vercel/",
    name: "Portfolio",
    information: "✨ My portfolio built with React, Tailwind CSS, and Vercel.",
    code: "React.js",
    stars: "0",
    forks: "1",
  },
  {
    link: "https://github.com/thenikhilsingh/URL-Shortener",
    hostingPlatform: "Render/",
    name: "URl Shortener",
    information: "✨ It is built with Express.js, HTML, CSS, and JavaScript.",
    code: "Express.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Weather-App-Using-Nodejs",
    hostingPlatform: "",
    name: "Weather App",
    information: "✨ It is built with Node.js, HTML, CSS, and JavaScript.",
    code: "Node.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Real-Time-Currency-Converter-App-Using-Nodejs",
    hostingPlatform: "",
    name: "Real Time Currency Converter",
    information: "✨ It is built with Node.js, HTML, CSS, and JavaScript.",
    code: "Node.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Random-Joke-Generator-App-Using-Nodejs",
    hostingPlatform: "",
    name: "Random Joke Generator App",
    information: "✨ It is built with Node.js, HTML, CSS, and JavaScript.",
    code: "Node.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/CLI-File-Creation-App-Using-Nodejs",
    hostingPlatform: "",
    name: "CLI File Creation App",
    information: "✨ It is built with Node.js, HTML, CSS, and JavaScript.",
    code: "Node.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/CLI-Todo-App-Using-Nodejs",
    hostingPlatform: "",
    name: "CLI Todo App",
    information: "✨ It is built with Node.js, HTML, CSS, and JavaScript.",
    code: "Node.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Shop-Adda",
    hostingPlatform: "Vercel/",
    name: "Shop Adda",
    information: "✨ It is built with React.js and TailwindCSS.",
    code: "React.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Memory-Game",
    hostingPlatform: "Vercel/",
    name: "Memory Game",
    information: "✨ It is built with React.js and TailwindCSS.",
    code: "React.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/CV-Builder",
    hostingPlatform: "Vercel/",
    name: "CV Builder",
    information: "✨ It is built with React.js and TailwindCSS.",
    code: "React.js",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/GIF-Hunt",
    hostingPlatform: "GitHub/",
    name: "Gif Hunt",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Calculator",
    hostingPlatform: "GitHub/",
    name: "Calculator",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Library",
    hostingPlatform: "GitHub/",
    name: "Library",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Weather-App",
    hostingPlatform: "GitHub/",
    name: "Weather App",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Rock-Paper-Scissors",
    hostingPlatform: "GitHub/",
    name: "Rock Paper Scissors",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Etch-a-Sketch",
    hostingPlatform: "GitHub/",
    name: "Etch a Sketch",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
  {
    link: "https://github.com/thenikhilsingh/Etch-a-Sketch",
    hostingPlatform: "GitHub/",
    name: "Etch a Sketch",
    information: "✨ It is built with HTML, CSS and JavaScript.",
    code: "JavaScript",
    stars: "0",
    forks: "0",
  },
];

const lpDetails = [
  {
    desktopImg: "bridgekala-desktop.png",
    mobileImg: "bridgekala-mobile.png",
    logo: "bridgekala-logo.svg",
    projectName: "Bridgekala Technologies",
    projectInformation:
      "Built the official BridgeKala company website using HTML, CSS and JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    duration: "---",
    role: "Frontend Developer",
    status: "Ongoing",
    technology: "JavaScript",
  },
  {
    desktopImg: "pioneer-kamal-desktop.png",
    mobileImg: "pioneer-kamal-mobile.png",
    logo: "pioneer-kamal-logo.png",
    projectName: "Pioneer Kamal Convent School",
    projectInformation:
      "Built the official Pioneer Kamal Convent School website using Laravel",
    technologies: ["Laravel", "PHP"],
    duration: "---",
    role: "Frontend Developer",
    status: "Ongoing",
    technology: "Laravel",
  },
  {
    desktopImg: "pioneer-convent-desktop.png",
    mobileImg: "pioneer-convent-mobile.png",
    logo: "pioneer-convent-logo.png",
    projectName: "Pioneer Convent Sr. Sec. School",
    projectInformation:
      "Built the official Pioneer Convent Sr. Sec. School website using Laravel",
    technologies: ["Laravel", "PHP"],
    duration: "17 days",
    role: "Frontend Developer",
    status: "Completed",
    technology: "Laravel",
  },
  {
    desktopImg: "blackbucket-desktop.png",
    mobileImg: "blackbucket-mobile.png",
    logo: "blackbucket-logo.png",
    projectName: "Black Bucket Consultants",
    projectInformation:
      "Built the official Black Bucket Consultants Website using HTML, CSSS, and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript", "BootStrap"],
    duration: "1 Month",
    role: "Frontend Developer",
    status: "Completed",
    technology: "JavaScript",
  },
];

export default function Projects() {
  return (
    <div className="size-full overflow-auto scrollbar-hide">
      <div className="bg-[#212124] text-white size-full p-10 flex flex-col gap-15 h-fit">
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">My Open-Source Projects</h1>
          <p className="text-lg text-[#D1D5DB]">
            Discover my most popular open-source projects on Github.
          </p>
          <div className="flex flex-wrap items-center gap-10">
            {ospDetails.map((detail) => (
              <a target="_blank" href={detail.link}>
                <div className=" text-black text-md font-medium w-[340px] h-40">
                  <div className="bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] p-5 h-[85%] flex flex-col gap-2">
                    <div className="text-2xl">
                      {detail.hostingPlatform}
                      <span className="text-[#3B82F6]">{detail.name}</span>
                    </div>
                    <div>{detail.information}</div>
                  </div>
                  <div className="flex justify-around items-center bg-white px-5 py-3 h-[30%]">
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
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold">Latest Projects</h1>
          <p className="text-lg text-[#D1D5DB]">
            I have transformed ideas into remarkable digital products.
          </p>
          {lpDetails.map((detail) => (
            <div>
              <div className="bg-[#242427] flex p-10 gap-10">
                <div className="w-[50%] relative flex items-center">
                  <div className="absolute right-0">
                    <img className="h-[280px]" src={detail.mobileImg} alt="" />
                  </div>
                  <div className="">
                    <img src={detail.desktopImg} alt="" />
                  </div>
                </div>
                <div className="w-[50%] flex flex-col gap-5">
                  <h1 className="text-xl">
                    <img className="h-10" src={detail.logo} alt="" />
                  </h1>
                  <h1 className="text-3xl font-bold">{detail.projectName}</h1>
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

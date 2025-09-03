import Icon from "@mdi/react";
import { mdiStarOutline, mdiSourceFork } from "@mdi/js";

const ospDetails = [
  {
    link: "#",
    hostingPlatform: "leerob/",
    name: "leerob.io",
    information:
      "✨ My portfolio built with Next.js, Tailwind CSS, PlanetScale,and Vercel.",
    code: "TypeScript",
    stars: "5824",
    forks: "1173",
  },
  {
    link: "#",
    hostingPlatform: "jxnblk/",
    name: "mdx-deck",
    information: "✨ React MDX-based presentation decks",
    code: "JavaScript",
    stars: "11115",
    forks: "664",
  },
  {
    link: "#",
    hostingPlatform: "vercel/",
    name: "og-image",
    information:
      "✨ Open Graph Image as a Service - generate cards for Twitter, Facebook, Slack, etc",
    code: "TypeScript",
    stars: "4001",
    forks: "1291",
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
          <div className="flex justify-center items-center gap-10">
            {ospDetails.map((detail) => (
              <a href={detail.link}>
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
          <div>
            <div className="bg-[#242427] flex p-10 gap-10">
              <div className="w-[50%]"></div>
              <div className="w-[50%] flex flex-col gap-5">
                <h1 className="text-xl">logo</h1>
                <h1 className="text-3xl font-bold">
                  Crypto website development for Defi X
                </h1>
                <p className="text-lg ">
                  The Time Traveller (for so it will be convenient to speak of
                  him) was expounding a recondite matter to us.
                </p>
                <div className="flex flex-col gap-3">
                  <h1 className="text-[#5696d6] text-lg font-bold">
                    Technologies
                  </h1>
                  <div className="flex gap-3">
                    <div className="bg-[#21322A] text-[#22C55E] px-2 py-1 text-lg">
                      Next.js
                    </div>
                    <div className="bg-[#21322A] text-[#22C55E] px-2 py-1 text-lg">
                      STRIPE
                    </div>
                    <div className="bg-[#21322A] text-[#22C55E] px-2 py-1 text-lg">
                      SHOPIFY
                    </div>
                  </div>
                </div>
                <div className="flex justify-between w-90">
                  <div className="flex flex-col gap-5">
                    <div>
                      <h1 className="text-[#5696d6] text-lg font-bold">
                        Duration
                      </h1>
                      <p>3 Weeks</p>
                    </div>
                    <div>
                      <h1 className="text-[#5696d6] text-lg font-bold">
                        Atmosphere
                      </h1>
                      <p>Cool</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <h1 className="text-[#5696d6] text-lg font-bold">Role</h1>
                      <p>NodeJS API Server</p>
                    </div>
                    <div>
                      <h1 className="text-[#5696d6] text-lg font-bold">
                        Technology
                      </h1>
                      <p>GraphQL</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Icon from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";
import React, { useEffect, useState } from "react";

const backendTechnologies = [
  {
    logo: "nodejs.svg",
    name: "Node.js",
    rate: ["#2D6AE8", "#3F3F46", "#3F3F46", "#3F3F46", "#3F3F46"],
  },
  {
    logo: "expressjs.svg",
    name: "Express.js",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46", "#3F3F46"],
  },
  {
    logo: "mongoDB.svg",
    name: "Mongo DB",
    rate: ["#3F3F46", "#3F3F46", "#3F3F46", "#3F3F46", "#3F3F46"],
  },
];

const frontendTechnologies = [
  {
    logo: "html.svg",
    name: "HTML",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8"],
  },
  {
    logo: "css.svg",
    name: "CSS",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46"],
  },
  {
    logo: "js.svg",
    name: "JavaScript",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46"],
  },
  {
    logo: "react.svg",
    name: "React.js",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46"],
  },
  {
    logo: "redux.svg",
    name: "Redux",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46", "#3F3F46"],
  },
  {
    logo: "bootstrap.svg",
    name: "Bootstrap",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46", "#3F3F46"],
  },
  {
    logo: "tailwindcss.svg",
    name: "TailwindCSS",
    rate: ["#2D6AE8", "#2D6AE8", "#2D6AE8", "#2D6AE8", "#3F3F46"],
  },
];

const details = [
  {
    serialNo: "01.",
    heading: "About me",
    paragraph:
      "B.Tech CSE student at MGM’s College (AKTU), Full Stack Web Development trainee at DUCAT, and Web Developer Intern at BridgeKala. Passionate about responsive, user-friendly web apps and impactful tech solutions.",
  },
  {
    serialNo: "02.",
    heading: "Interests and Hobbies",
    paragraph:
      "My interests and hobbies include singing, working out at the gym, drawing, and coding. These activities allow me to balance creativity, fitness, and technical growth in my personal and professional life.",
  },
  {
    serialNo: "03.",
    heading: "Framework Preferences",
    paragraph:
      "I prefer working with modern frameworks that streamline development and enhance performance. My current preferences include React.js for building responsive front-end interfaces, Node.js with Express.js for scalable back-end applications, and Tailwind CSS for clean, efficient styling.",
  },
];

const careerDetails = [
  {
    heading: "Employment",
    details: [
      {
        OrgName: "Bridgekala Technologies",
        duration: "july 2025 - Present",
        role: "Web Developer Intern",
      },
    ],
  },
  {
    heading: "Education",
    details: [
      {
        OrgName: "MGM College of Engineering and Technology",
        duration: "2021-2025",
        role: "B.Tech in CSE Branch",
      },
      {
        OrgName: "S.S. International Sr.Sec. School",
        duration: "2006-2021",
        role: "10th and 12th",
      },
    ],
  },
];

export default function About() {
  const words = ["Front-End Development", "Back-End Development"];

  const TYPING_SPEED = 70;
  const DELETING_SPEED = 45;
  const HOLD_ON_WORD = 900;
  const HOLD_BEFORE_NEXT = 350;

  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let delay = deleting ? DELETING_SPEED : TYPING_SPEED;

    if (!deleting && subIndex === currentWord.length) {
      delay = HOLD_ON_WORD;
    }

    if (deleting && subIndex === 0) {
      delay = HOLD_BEFORE_NEXT;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (subIndex < currentWord.length) {
          setSubIndex((s) => s + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (subIndex > 0) {
          setSubIndex((s) => s - 1);
        } else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, wordIndex, words]);

  const text = words[wordIndex].slice(0, subIndex);

  return (
    <div className="size-full overflow-auto scrollbar-hide ">
      <div className="flex">
        <div className="w-[30%] h-[1140px]  bg-[#AAAAAA]"></div>
        <div className="w-[70%] h-[1140px]  bg-[#222225] ">
          <div className="p-10">
            <h1 className="text-white font-bold text-4xl">
              I'm Specialized in
            </h1>
            <div className="flex items-center">
              <Icon path={mdiChevronRight} size={2} color="#9898a8" />
              <div className=" text-[#A4F025]">
                <div className="text-center">
                  <h1 className="text-3xl  font-semibold ">
                    {text}
                    <span className="blink text-gray-300">_</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2px] bg-[#3F3F46] shadow-xl/30">
            <div className="bg-[#1E1E21] p-10 flex flex-col justify-around h-45">
              <div className="text-xl text-white border-l-2 border-l-[#A4F025] pl-4 flex items-center">
                Back-End Development
              </div>
              <div className="width-full  grid grid-cols-3">
                {backendTechnologies.map((tech, i) => (
                  <div className="flex">
                    <div
                      key={i}
                      className="flex justify-between items-center w-55"
                    >
                      <div className="flex gap-2">
                        <img className="size-7" src={tech.logo} alt="" />
                        <h1 className="text-white font-bold">{tech.name}</h1>
                      </div>
                      <div className="flex gap-[1px] w-18 h-4 ">
                        {tech.rate.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-[20%] "
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1E1E21] p-10 flex flex-col justify-around h-50 gap-6">
              <div className="text-xl text-white border-l-2 border-l-[#A4F025] pl-4 flex items-center">
                Front-End Development
              </div>
              <div className="width-full grid grid-cols-3">
                {frontendTechnologies.map((tech, i) => (
                  <div className="flex">
                    <div
                      key={i}
                      className="flex justify-between items-center w-55"
                    >
                      <div className="flex gap-2">
                        <img className="size-7" src={tech.logo} alt="" />
                        <h1 className="text-white font-bold">{tech.name}</h1>
                      </div>
                      <div className="flex gap-[1px] w-18 h-4 ">
                        {tech.rate.map((color, idx) => (
                          <div
                            key={idx}
                            className="w-[20%] "
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-10">
            {details.map((detail) => (
              <div className="flex flex-col justify-around h-42">
                <h1 className="flex text-2xl font-bold gap-2">
                  <span className="text-[#9CA3AF]">{detail.serialNo}</span>
                  <span className="text-white">{detail.heading}</span>
                </h1>
                <p className="text-xl text-[#a4a4ad]">{detail.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white w-[100%] flex justify-center  p-10">
        {careerDetails.map((section) => (
          <div className="flex w-[40%]">
            <div className="w-full">
              <div>
                <h1 className="text-4xl font-bold">{section.heading}</h1>
                <div className="bg-[#A3F026] w-[100%] h-2"></div>
              </div>

              {section.details.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between">
                    <div>{item.OrgName}</div>
                    <div>{item.duration}</div>
                  </div>
                  <div>{item.role}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

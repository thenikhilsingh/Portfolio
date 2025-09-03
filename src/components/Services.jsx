import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const servicesDetails = [
  {
    svg: (
      <svg
        stroke="currentColor"
        fill="#3B82F6"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 mb-6 h-12 w-12 fill-accent"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"></path>
      </svg>
    ),
    heading: "Web and Mobile App Design",
    paragraph:
      "Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.",
    listItems: [
      "Design Strategy",
      "Web and Mobile App Design",
      "Front-end Development",
    ],
  },
  {
    svg: (
      <svg
        role="img"
        fill="#3B82F6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 mb-6 h-12 w-12 fill-accent"
        width="28"
      >
        <title>Prisma</title>
        <path d="M21.8068 18.2848L13.5528.7565c-.207-.4382-.639-.7273-1.1286-.7541-.5023-.0293-.9523.213-1.2062.6253L2.266 15.1271c-.2773.4518-.2718 1.0091.0158 1.4555l4.3759 6.7786c.2608.4046.7127.6388 1.1823.6388.1332 0 .267-.0188.3987-.0577l12.7019-3.7568c.3891-.1151.7072-.3904.8737-.7553s.1633-.7828-.0075-1.1454zm-1.8481.7519L9.1814 22.2242c-.3292.0975-.6448-.1873-.5756-.5194l3.8501-18.4386c.072-.3448.5486-.3996.699-.0803l7.1288 15.138c.1344.2856-.019.6224-.325.7128z"></path>
      </svg>
    ),
    heading: "Project Strategy & Development",
    paragraph:
      "Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.",
    listItems: [
      "Design Strategy",
      "Web and Mobile App Design",
      "Front-end Development",
    ],
  },
  {
    svg: (
      <svg
        stroke="currentColor"
        fill="#3B82F6"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 mb-6 h-12 w-12 fill-accent"
      >
        <path d="M296 250c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H296zm184 144H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zm-48 458H208V148h560v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm440-88H728v-36.6c46.3-13.8 80-56.6 80-107.4 0-61.9-50.1-112-112-112s-112 50.1-112 112c0 50.7 33.7 93.6 80 107.4V764H520c-8.8 0-16 7.2-16 16v152c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16V780c0-8.8-7.2-16-16-16zM646 620c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50zm180 266H566v-60h260v60z"></path>
      </svg>
    ),
    heading: "UI/UX Design & Optimization",
    paragraph:
      "Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.",
    listItems: [
      "Design Strategy",
      "Web and Mobile App Design",
      "Front-end Development",
    ],
  },
  {
    svg: (
      <svg
        stroke="currentColor"
        fill="#3B82F6"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
        class="relative z-10 mb-6 h-12 w-12 fill-accent"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z"></path>
      </svg>
    ),
    heading: "Application Audit & Debugging",
    paragraph:
      "Defining the problem, identifying the scope and finally, organizing. Et tempor non mollit dolor et do aute voluptate ea ullamco culpa pariatur.",
    listItems: [
      "Design Strategy",
      "Web and Mobile App Design",
      "Front-end Development",
    ],
  },
];

export default function Services() {
  return (
    <div className="size-full overflow-auto scrollbar-hide ">
      <div className="flex bg-[#222225]">
        <div data-aos="fade-right" className="w-[33%] h-[1140px] text-white p-10 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Services</h1>
            <h1 className="txt-gradient text-4xl font-bold">My Expertise</h1>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Solving problems</h1>
              <p className="text-xl text-[#d4d0d0]">
                I design products that are more than pretty. I make them
                shippable and usable. Et tempor non mollit dolor et do aute
                voluptate ea ullamco.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">What you can expect</h1>
              <ul className="text-xl text-[#d4d0d0] space-y-2 list-disc list-inside marker:text-[#3F4752] ">
                <li>Design Strategy</li>
                <li>Web and Mobile App Design</li>
                <li>Front-end Development</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Applications I'm fluent in</h1>
              <ul className="text-xl text-[#d4d0d0] space-y-2 list-disc list-inside marker:text-[#3F4752] ">
                <li>Design Strategy</li>
                <li>Web and Mobile App Design</li>
                <li>Front-end Development</li>
              </ul>
            </div>
          </div>
          <div className="relative text-black mt-4">
            <div className="h-13 w-70 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute top-0 left-0"></div>
            <div className="h-13 w-70 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
              <a href="">Get Free Price Quote</a>
            </div>
          </div>
        </div>
        <div className="w-[67%] h-[1140px] flex flex-wrap gap-10 p-10">
          {servicesDetails.map((service) => (
            <div  data-aos="zoom-in" className="w-[47%]">
              <div className="bg-[linear-gradient(180deg,#b7ff3c,#26d53a)] p-8">
                {service.svg}
                <h1 className="text-3xl font-bold">{service.heading}</h1>
              </div>
              <div className="bg-white text-lg font-medium p-8">
                <p className="text-[#5c5d5f]">{service.paragraph}</p>
                <ul className="space-y-2 list-disc list-inside marker:text-[#3F4752] ">
                  {service.listItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesDetails from "../data/servicesData";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="size-full overflow-auto scrollbar-hide ">
      <div className="flex flex-col lg:flex-row bg-[#222225]">
        <div
          data-aos="fade-right"
          className=" lg:w-[33%] lg:h-[1140px] text-white lg:p-10 flex flex-col lg:gap-10"
        >
          <div className="flex flex-col gap-4 p-5 lg:p-0 bg-[#1f1e1e] lg:bg-[#222225]">
            <h1 className="text-4xl font-bold">Services</h1>
            <h1 className="txt-gradient text-4xl font-bold">My Expertise</h1>
          </div>
          <div className="lg:hidden h-[1px] w-[100vw] bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400"></div>
          <div className="flex flex-col gap-8 p-5 lg:p-0">
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Solving problems</h1>
              <p className="text-xl text-[#d4d0d0]">
                I design and develop applications that are fast, responsive, and
                user-friendly. With expertise in React.js, TailwindCSS, Node.js,
                and MongoDB, I transform ideas into reliable digital products.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">What you can expect</h1>
              <ul className="text-xl text-[#d4d0d0] space-y-2 list-disc list-inside marker:text-[#3F4752] ">
                <li>Modern Web Applications</li>
                <li>Interactive UI/UX Design</li>
                <li>Full-stack Development</li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-xl font-bold">Applications I'm fluent in</h1>
              <ul className="text-xl text-[#d4d0d0] space-y-2 list-disc list-inside marker:text-[#3F4752] ">
                <li>React.js & TailwindCSS</li>
                <li>Node.js & Express.js</li>
                <li>MongoDB & REST APIs</li>
              </ul>
            </div>
          </div>
          <NavLink to="/contact">
            <div className="relative text-black mt-4 m-5 lg:m-0">
              <div className="h-13 w-70 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute top-0 left-0"></div>
              <div className="h-13 w-70 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
                <a href="">Get Free Price Quote</a>
              </div>
            </div>
          </NavLink>
        </div>
        <div className="lg:w-[67%] mb-20 xl:h-[1140px] flex flex-wrap lg:gap-8 lg:p-10 xl:gap-10 p-5 xl:p-10">
          {servicesDetails.map((service) => (
            <div data-aos="zoom-in" className="lg:w-[47%]">
              <div className="bg-[linear-gradient(180deg,#b7ff3c,#26d53a)] p-8">
                <img className="h-12 my-5" src={service.src} alt="" />
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

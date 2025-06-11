import React from "react";
import Icon from '@mdi/react';
import { mdiSend, mdiArrowRight } from '@mdi/js';

export default function Contact() {
  return (
    <div className=" h-[100vh] flex flex-col md:flex-row justify-center lg:justify-around items-center  px-6 md:px-10 bg-white gap-10">
      
      {/* Left Side */}
      <div className="flex items-center gap-6 md:gap-20">
        <div className="text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">You Need</h1>
          <p className="text-sm md:text-md text-gray-800">
            Beautiful Design for your website <br /> leave a request
          </p>
        </div>
        <div className="p-3 bg-white rounded-lg shadow-md w-fit">
          <Icon path={mdiArrowRight} size={1} className="text-yellow-500" />
        </div>
      </div>

      {/* Right Side - Form */}
      <form className="flex flex-col gap-3 w-full max-w-[400px]">
        <input
          type="email"
          placeholder="e.g. example@gmail.com"
          className="p-2 border shadow-md outline-none text-sm"
        />
        <input
          type="text"
          placeholder="e.g. Web Dev"
          className="p-2 border shadow-md outline-none text-sm"
        />
        <textarea
          rows="4"
          placeholder="Write your message"
          className="p-2 border shadow-md outline-none resize-none text-sm"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white font-semibold py-2 rounded-md shadow-md border border-black"
        >
          Send <Icon path={mdiSend} size={0.9} />
        </button>
      </form>
    </div>
  );
}

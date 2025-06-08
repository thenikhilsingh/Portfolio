import React from "react";
import Icon from '@mdi/react';
import { mdiSend, mdiArrowRight } from '@mdi/js';

export default function Contact() {
  return (
    <div className="flex justify-around items-center min-h-screen px-10 bg-white">
      
      <div className="flex items-center gap-20">
        <div className="text-left space-y-4">
          <h1 className="text-5xl font-bold">You Need</h1>
          <p className="text-md text-gray-800">
            Beautiful Design for your website <br /> leave a request
          </p>
        </div>
          <div className="p-3 bg-white rounded-lg shadow-md w-fit">
            <Icon path={mdiArrowRight} size={1} className="text-yellow-500" />
          </div>
      </div>

      
      <form className="flex flex-col gap-3 w-[400px]">
        <input
          type="email"
          placeholder="e.g. example@gmail.com"
          className="p-2 border shadow-md outline-none"
        />
        <input
          type="text"
          placeholder="e.g. Web Dev"
          className="p-2 border shadow-md outline-none"
        />
        <textarea
          rows="4"
          placeholder="Write your message"
          className="p-2 border shadow-md outline-none resize-none"
        />
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 transition-colors duration-300 text-white font-semibold py-2 rounded-md shadow-md border border-black"
        >
          Send <Icon path={mdiSend} size={1} />
        </button>
      </form>
    </div>
  );
}

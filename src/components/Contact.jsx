import Icon from "@mdi/react";
import { mdiPhone, mdiEmailOutline, mdiLinkedin, mdiGithub } from "@mdi/js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  return (
    <div className="size-full overflow-auto scrollbar-hide">
      <div className="bg-[#18181B] w-full lg:h-[950px] mb-15 flex flex-col lg:flex-row">
        <div 
        // data-aos="fade-right"
         className="lg:w-[35%] h-full text-white text-lg lg:p-8 flex flex-col lg:gap-5">
          <h1 className="text-4xl font-bold p-5 lg:p-0">Get in touch</h1>
          <div className="text-4xl font-bold txt-gradient px-5 pb-5 lg:p-0">
            Let's talk about your project
          </div>
          <div className="lg:hidden h-[1px] w-[100vw] bg-gradient-to-r from-blue-500 via-green-400 to-yellow-400"></div>
          <p className="mt-5 p-5 lg:p-0">
            Thinking about a new project, a problem to solve, or just want to
            connect? Let's do it!
          </p>
          <p className="mb-5 p-5 lg:p-0">
            Use the form on this page or get in touch by other means.
          </p>
          <div className="flex flex-col gap-5 p-5 lg:p-0">
            <div className="flex items-center gap-2">
              <Icon path={mdiPhone} size={1} />
              <div>Phone: 9911819654</div>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={mdiEmailOutline} size={1} />
              <div>
                Email:{" "}
                <a
                  className="underline decoration-[#AFF322] underline-offset-4 hover:decoration-2
                "
                  href="mailto:nikhilsingh26042004@gmail.com"
                >
                  nikhilsingh26042004@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={mdiLinkedin} size={1} />
              <div>
                Linkedin:{" "}
                <a
                  className="underline decoration-[#AFF322] underline-offset-4 hover:decoration-2
                "
                  href=""
                >
                  Nikhil Singh
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icon path={mdiGithub} size={1} />
              <div>
                GitHub:{" "}
                <a
                  className="underline decoration-[#AFF322] underline-offset-4 hover:decoration-2
                "
                  href=""
                >
                  thenikhilsingh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div 
        // data-aos="zoom-in" 
        className="lg:w-[65%] h-fit p-8">
          <div className="w-full h-fit relative">
            <div className="size-full bg-[#3F3F46] absolute top-0 left-0"></div>
            <form
              action=""
              className="text-white width-full bg-[#18181B] border-1 border-gray-500 relative  -translate-x-2 -translate-y-2"
            >
              <div className="bg-[#27272A] text-lg w-full p-5">
                Your contact information
              </div>
              <div className="w-full flex flex-col items-center gap-3 p-5">
                <div className="flex flex-col lg:flex-row w-full justify-between lg:text-sm xl:text-base">
                  <input
                    className="bg-[#232327] border-b border-[#378CE4] lg:w-35 xl:w-54 h-12 px-4"
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="bg-[#232327] border-b border-[#378CE4] ;g:w-54 h-12 px-4"
                    type="text"
                    placeholder="Last Name"
                  />
                  <input
                    className="bg-[#232327] border-b border-[#378CE4] lg:w-35 xl:w-54 h-12 px-4"
                    type="text"
                    placeholder="Email Address"
                  />
                </div>
                <div className="flex flex-col lg:flex-row w-full  justify-between lg:text-sm xl:text-base">
                  <input
                    className="bg-[#232327] border-b border-[#378CE4] lg:w-40 xl:w-54 h-12 px-4"
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    className="bg-[#232327] border-b border-[#378CE4] lg:w-40 xl:w-54 h-12 px-4"
                    type="text"
                    placeholder="Phone Number"
                  />
                  <select
                    className="bg-[#232327] border-b border-[#378CE4] lg:w-40 xl:w-54 h-12 px-4"
                    name=""
                    id=""
                  >
                    <option value="">-- Select Country --</option>
                    <option value="India">India</option>
                    <option value="US">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="Germany">Germany</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="bg-[#27272A] text-lg p-5 w-full">
                What services do you need for your project?
              </div>
              <div className="flex flex-col lg:items-center">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 p-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">Website Development</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">Website Migration</label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">App Development</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">E-commerce Site</label>
                    </div>
                  </div>{" "}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">Design System</label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input className="size-7" type="checkbox" name="" id="" />
                      <label htmlFor="">Performance Evaluation</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#27272A] text-lg w-full p-5">
                How much is the anticipated budget?
              </div>
              <div className="flex flex-col items-center w-full p-5 ">
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 w-full">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="circle" className="size-7" />
                    <label htmlFor="">Less than $2,000</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="" id="" className="size-7" />
                    <label htmlFor="">$2,000 - $10,000</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="" id="" className="size-7" />
                    <label htmlFor="">More than $10,000</label>
                  </div>
                </div>
              </div>
              <div className="bg-[#27272A] text-lg w-full p-5">
                Tell me about your project
              </div>
              <div className="p-5">
                <textarea
                  id="w3review"
                  name="w3review"
                  rows="4"
                  cols="50"
                  placeholder="Project description"
                  className="bg-[#232327] border-b border-[#378CE4] w-full h-25 px-4 py-2 align-top"
                ></textarea>
              </div>
              <div className="px-10 py-5">
                <div className="relative text-black mt-4">
                  <div className="h-13 w-60 bg-[linear-gradient(90deg,rgba(231,255,135,1)_5%,rgba(207,254,25,1)_40%,rgba(107,222,53,1)_90%)] absolute top-0 left-0"></div>
                  <div className="h-13 w-60 flex items-center justify-center bg-white relative  -translate-x-2 -translate-y-2 hover:translate-x-0 hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <a href="">Submit</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

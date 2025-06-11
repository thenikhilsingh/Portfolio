import telegram from "../assets/telegram.webp";
import whatsapp from "../assets/whatsapp.webp";
import instagram from "../assets/instagram.webp"; // corrected typo from "imstagram"

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-6 bg-[#F1C604] text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
        Let's Talk
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-4 text-white">
        <a
          className="flex flex-col items-center text-sm sm:text-base"
          target="blank"
          href="https://web.telegram.org/a/"
        >
          <img className="w-6 sm:w-7 md:w-8" src={telegram} alt="Telegram" />
          <p>Telegram</p>
        </a>

        <a
          className="flex flex-col items-center text-sm sm:text-base"
          target="blank"
          href="https://web.whatsapp.com/"
        >
          <img className="w-6 sm:w-7 md:w-8" src={whatsapp} alt="WhatsApp" />
          <p>WhatsApp</p>
        </a>

        <a
          className="flex flex-col items-center text-sm sm:text-base"
          target="blank"
          href="https://www.instagram.com/_thakurnikhilsingh_/"
        >
          <img className="w-6 sm:w-7 md:w-8" src={instagram} alt="Instagram" />
          <p>Instagram</p>
        </a>
      </div>

      <div className="text-xs sm:text-sm mt-4">
        | Copyright © 2025 Web Addicted All rights reserved |
      </div>
    </div>
  );
}

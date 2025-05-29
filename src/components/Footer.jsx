import telegram from "../assets/telegram.webp";
import whatsapp from "../assets/whatsapp.webp";
import imstagram from "../assets/instagram.webp";

export default function Footer() {
  return (
    <div className=" flex flex-col justify-center items-center p-4 gap-8 bg-[#F1C604]">
      <h1 className="text-7xl font-bold">Let's Talk</h1>
      <div className="flex gap-4 text-white">
        <a
          className="flex flex-col items-center"
          target="blank"
          href="https://web.telegram.org/a/"
        >
          <img className="size-8" src={telegram} alt="" />
          <p>Telegram</p>
        </a>

        <a
          className="flex flex-col items-center"
          target="blank"
          href="https://web.whatsapp.com/"
        >
          <img className="size-8" src={whatsapp} alt="" />
          <p>WhatsApp</p>
        </a>

        <a
          className="flex flex-col items-center"
          target="blank"
          href="https://www.instagram.com/_thakurnikhilsingh_/"
        >
          <img className="size-8" src={imstagram} alt="" />
          <p>Instagram</p>
        </a>
      </div>
      <div>| Copyright © 2025 Web Addicted All rights reserved |</div>
    </div>
  );
}

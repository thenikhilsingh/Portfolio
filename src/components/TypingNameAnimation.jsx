import React, { useEffect, useState } from "react";

export default function TypingNameAnimation({
  text = "Nikhil Singh",
  initialDelay = 2000, // 2 sec rukna
  typeSpeed = 120, // har letter ka speed
}) {
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      let i = -1;

      intervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayed((prev) => prev + text.charAt(i)); // ✅ charAt fix
          i++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, typeSpeed);
    }, initialDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, initialDelay, typeSpeed]);

  return (
    <div className="text-white text-5xl roboto-mono font-[700]">
      {displayed}
      <span
        className={"blinking-underscore ml-1" + (isTyping ? " typing" : "")}
      >
        _
      </span>
    </div>
  );
}

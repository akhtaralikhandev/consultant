import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";

function TypewriterComponent() {
  useEffect(() => {
    const typewriter = new Typewriter(".typewriter-container", {
      delay: 75,
      strings: [
        "Our <span class='consultation_span'>consultation</span> is",
        "always in sync",
        "with your strategy",
      ],
      autoStart: true,
      loop: true,
      cursor: "",
      html: true, // Enable HTML formatting within strings
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <div className="flex flex-col xl:text-6xl lg:text-4xl md:text-3xl text-xl sm:text-xl heroMainLeft">
      <div className="typewriter-container">
        {/* The typewriter will append the text here */}
      </div>
    </div>
  );
}

export default TypewriterComponent;

import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { TiMessages } from "react-icons/ti";

const BelowSocialbtn = () => {
  const [showIcons, setShowIcons] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (showIcons) {
      // If icons should be shown, animate them into view
      setStyle({
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      });
    } else {
      // If icons should be hidden, animate them out of view
      setStyle({
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
        visibility: "hidden",
        transitionDelay: "0s, 0.3s", // Delay the visibility change until after the transform
      });
    }
  }, [showIcons]); // Depend on showIcons to trigger the effect

  return (
    <div className="fixed bottom-0 left-0 p-4 flex flex-col items-center">
      <div style={style} className="flex flex-col items-center mb-4 space-y-2">
        <a
          href="whatsapp://send?text=Hello"
          className="text-green-600 text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:bambinabreeze@gmail.com"
          className="text-red-600 text-2xl"
        >
          <FaEnvelope />
        </a>
        <a href="tel:+1234567890" className="text-blue-600 text-2xl">
          <FaPhone />
        </a>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center"
        onClick={() => setShowIcons(!showIcons)}
      >
        <TiMessages className="text-2xl" />
      </button>
    </div>
  );
};

export default BelowSocialbtn;

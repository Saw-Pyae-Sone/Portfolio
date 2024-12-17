import React, { useState } from "react";
import { SiMinutemailer } from "react-icons/si";
import '../../src/tooltips.css';

function CopyButton() {
  const [tooltip, setTooltip] = useState("Copy Email!");

  const handleCopy = () => {
    navigator.clipboard.writeText("sawpyaesone23@gmail.com");
    setTooltip("Copied!");
    setTimeout(() => setTooltip("Copy Email!"), 1500); // Reset after 1.5s
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
        data-tooltips={tooltip} // Dynamically set the tooltip text
      >
        <SiMinutemailer />
        {/* <span>sawpyaesone23@gmail.com</span> */}
      </button>
    </div>
  );
}

export default CopyButton;

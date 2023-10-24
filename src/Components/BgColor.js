import React, { useState } from "react";

const BgColor = () => {
  const [bgColor, setBgColor] = useState("bg-red-500");

  const changeBG = () => {
    if (bgColor === "bg-red-500") {
      setBgColor("bg-blue-500");
    } else {
      setBgColor("bg-red-500");
    }
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">BgColor</h1>
      <div
        className={`${bgColor} w-72 h-72 cursor-pointer flex items-center justify-center text-white font-semibold`}
        onClick={() => changeBG()}
      >
        Click to change color
      </div>
    </div>
  );
};

export default BgColor;

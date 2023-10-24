import React, { useState } from "react";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold">ColorPicker</h1>
      <div>
        <input
          type="color"
          onChange={(e) => handleChange(e)}
          className="mt-2"
        />
      </div>
      <div
        className="mt-4 w-16 h-16 rounded-md"
        style={{ backgroundColor: selectedColor }}
      ></div>
    </div>
  );
};

export default ColorPicker;

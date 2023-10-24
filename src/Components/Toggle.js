import React, { useState } from "react";

const Toggle = () => {
  let [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">Toggle</h1>
      <label className="flex items-center space-x-2">
        <span className="text-gray-700">Off</span>
        <input
          type="checkbox"
          onChange={handleToggle}
          className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
          checked={toggle}
        />
        <span className="text-gray-700">On</span>
      </label>
      <p className="text-gray-700">{toggle ? "On" : "Off"}</p>
    </div>
  );
};

export default Toggle;

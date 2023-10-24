import React, { useState } from "react";

const ResponsiveNav = () => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-blue-500 p-4">
      <h1 className="text-2xl font-semibold text-white">Responsive Navbar</h1>
      <div>
        <button
          className="menu-icon text-2xl text-white"
          onClick={() => toggleMenu()}
        >
          ☰
        </button>
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li className="mb-2 text-white">Home</li>
          <li className="mb-2 text-white">About</li>
          <li className="mb-2 text-white">Services</li>
          <li className="mb-2 text-white">Contact us</li>
          <li className="mb-2 text-white">About US</li>
          <li className="mb-2 text-white">Close</li>
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveNav;

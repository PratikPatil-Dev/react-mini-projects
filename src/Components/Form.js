import React, { useState } from "react";

const Form = () => {
  let [input, setInput] = useState("");

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">Form</h1>
      <div className="flex flex-col space-y-2">
        <input
          type="text"
          placeholder="Enter name"
          className="px-4 py-2 border rounded-lg focus:outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="text-gray-700">User Name: {input}</p>
      </div>
    </div>
  );
};

export default Form;

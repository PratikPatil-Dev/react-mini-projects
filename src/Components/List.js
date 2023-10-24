import React from "react";

const List = () => {
  const list = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">List</h1>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 border-b border-gray-300 py-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

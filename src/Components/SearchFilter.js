import React, { useState } from "react";

const SearchFilter = () => {
  const [searchInput, setSearchInput] = useState("");

  const items = ["item1", "item2", "item3"];

  const filteredItem = items.filter((item) => {
    return item.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-2xl font-semibold">Search Filter</h1>
      <input
        type="text"
        className="border rounded-md p-2 my-2"
        placeholder="Search..."
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <ul>
        {filteredItem.map((item, i) => (
          <li key={i} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;

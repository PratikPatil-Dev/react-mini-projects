import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  let itemsPerPage = 2;

  const list = [
    "This is some awesome thinking!",
    "What terrific math skills you’re showing!",
    "You are an amazing writer!",
    "Wow! You have improved so much!",
    "You are showing excellent understanding!",
    "This is clear, concise, and complete!",
    "What a powerful argument!",
    "I knew you could do it!",
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  const pageNo = [];
  for (let i = 1; i <= Math.ceil(list.length / itemsPerPage); i++) {
    pageNo.push(i);
  }

  return (
    <div className="bg-blue-100 p-4">
      <h1 className="text-2xl font-semibold">Pagination</h1>
      <ul>
        {currentItems.map((item, i) => (
          <li key={i} className="text-lg">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        {pageNo.map((num) => (
          <button
            key={num}
            className={`px-2 py-1 rounded-md ${
              num === currentPage ? "bg-blue-500 text-white" : "bg-blue-200"
            }`}
            onClick={() => setCurrentPage(num)}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;

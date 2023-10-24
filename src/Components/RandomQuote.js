import React from "react";

const RandomQuote = () => {
  const quotes = [
    "Life isn’t about getting and having, it’s about giving and being.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Quality is everyone's responsibility.",
    "All wish to possess knowledge, but few, comparatively speaking, are willing to pay the price.",
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  let quote = quotes[randomIndex];

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">RandomQuote</h1>
      <p className="text-lg">{quote}</p>
    </div>
  );
};

export default RandomQuote;

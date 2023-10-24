import React, { useEffect, useState } from "react";

const CountDown = () => {
  let [timer, setTimer] = useState(0);
  let [counter, setCounter] = useState(0);
  let countDown;

  const handleCountdown = () => {
    setCounter(timer);
  };

  useEffect(() => {
    if (counter > 0) {
      countDown = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
    } else {
      clearTimeout(countDown);
    }
    return () => {
      clearTimeout(countDown);
    };
  }, [counter]);

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">CountDown</h1>
      <div>
        <label className="text-gray-700 mb-2 block">Set Timer:</label>
        <input
          type="text"
          onChange={(e) => setTimer(Number(e.target.value))}
          className="w-24 p-2 border border-gray-300 rounded"
        />
        <h2 className="text-2xl font-semibold mt-4">{`Timer: ${timer}`}</h2>
        <button
          onClick={() => handleCountdown()}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mt-4"
        >
          Start Timer
        </button>
        <h2 className="text-2xl font-semibold mt-4">{counter}</h2>
      </div>
    </div>
  );
};

export default CountDown;

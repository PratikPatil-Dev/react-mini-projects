import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Counter = () => {
  let [count, setCount] = useState(0);

  const increment = () => {
    setCount(++count);
  };

  const decrement = () => {
    if (count > 0) setCount(--count);
  };

  return (
    <div className="flex justify-center">
      <Button
        className="font-semibold bg-slate-500 p-4 rounded-lg mx-2"
        onClick={() => decrement()}
      >
        Decrement
      </Button>
      <h1 className=" text-4xl font-bold mx-2">{count}</h1>
      <Button
        className="font-semibold bg-slate-500 p-4 rounded-lg mx-2"
        onClick={() => increment()}
      >
        Increment
      </Button>
    </div>
  );
};

export default Counter;

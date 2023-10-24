import React, { useState } from "react";

const ToDo = () => {
  let [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const updatedTodo = todos.filter((_, i) => i !== index);
    setTodos(updatedTodo);
  };

  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-semibold mb-4">ToDo</h1>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="w-72 p-2 border border-gray-300 rounded"
      />
      <button
        onClick={() => addTodo()}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded ml-2"
      >
        Add
      </button>
      <ul className="mt-4">
        {todos?.map((task, index) => (
          <li key={index} className="flex items-center">
            {task}
            <button
              onClick={() => removeTodo(index)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold p-1 ml-2 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;

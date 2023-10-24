import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="todo-app">
        <h1 className="font-bold tracking-[2px] text-4xl my-10">React Mini Projects</h1>
        <Button className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded text-white hover:scale-105">
          <Link to="hello" className="custom-link">
            Go To Projects Page
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default App;

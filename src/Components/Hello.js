import React from "react";
import { Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Hello = () => {
  return (
    <div>
      <div className="font-bold tracking-widest text-3xl text-center my-4">
        React Projects
      </div>
      <div className="my-10 flex justify-center flex-wrap">
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="/" className="custom-link">
            Back to home
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="counter" className="custom-link">
            Counter
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="form" className="custom-link">
            Form
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="list" className="custom-link">
            List
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="toggle" className="custom-link">
            Toggle
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="fetch" className="custom-link">
            Fetch API
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="countdown" className="custom-link">
            CountDown
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="todo" className="custom-link">
            ToDo
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="bgcolor" className="custom-link">
            change BG color
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="randomQuote" className="custom-link">
            Random Quote
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="fileUploader" className="custom-link">
            File Uploader
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="authentication" className="custom-link">
            Authentication
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="weather" className="custom-link">
            Weather App
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="searchFilter" className="custom-link">
            Search Filter
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="pagination" className="custom-link">
            Pagination
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="colorPicker" className="custom-link">
            Color Picker
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="responsiveNav" className="custom-link">
            Responsive Navbar
          </Link>
        </Button>
        <Button className="px-4 py-2 rounded-full bg-blue-500 m-2 hover:text-white transition-all duration-300">
          <Link to="tasks" className="custom-link">
            Tasks
          </Link>
        </Button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Hello;

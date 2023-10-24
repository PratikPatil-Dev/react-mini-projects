import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Authentication from "./Components/Authentication";
import BgColor from "./Components/BgColor";
import ColorPicker from "./Components/ColorPicker";
import CountDown from "./Components/CountDown";
import Counter from "./Components/Counter";
import FetchAPI from "./Components/FetchAPI";
import FileUploader from "./Components/FileUploader";
import Form from "./Components/Form";
import Hello from "./Components/Hello";
import List from "./Components/List";
import Pagination from "./Components/Pagination";
import RandomQuote from "./Components/RandomQuote";
import ResponsiveNav from "./Components/ResponsiveNav";
import SearchFilter from "./Components/SearchFilter";
import Tasks from "./Components/Tasks";
import ToDo from "./Components/ToDo";
import Toggle from "./Components/Toggle";
import WeatherApp from "./Components/WeatherApp";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hello",
    element: <Hello />,
    children: [
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "list",
        element: <List />,
      },
      {
        path: "toggle",
        element: <Toggle />,
      },
      {
        path: "fetch",
        element: <FetchAPI />,
      },
      {
        path: "countdown",
        element: <CountDown />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
      {
        path: "bgcolor",
        element: <BgColor />,
      },
      {
        path: "randomQuote",
        element: <RandomQuote />,
      },
      {
        path: "fileUploader",
        element: <FileUploader />,
      },
      {
        path: "authentication",
        element: <Authentication />,
      },
      {
        path: "weather",
        element: <WeatherApp />,
      },
      {
        path: "searchFilter",
        element: <SearchFilter />,
      },
      {
        path: "pagination",
        element: <Pagination />,
      },
      {
        path: "colorPicker",
        element: <ColorPicker />,
      },
      {
        path: "responsiveNav",
        element: <ResponsiveNav />,
      },

      {
        path: "tasks",
        element: <Tasks />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

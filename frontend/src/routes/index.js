import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home" 

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
  
      children: [
        {
          path: "team",
          element: <Home />,
       
        },
      ],
    },
  ]);
export default routes 


// https://reactrouter.com/en/main/routers/create-browser-router
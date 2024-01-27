import React from "react";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home" 
import Login from "../components/signin/login";
import CompanyRegistration from "../components/signin/companyregistartion";
import DownloadComponent from "../components/downloadexcel/downloadexcelgst";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
  
     
    },

    {
      path: "/companyregistartion",
      element: <CompanyRegistration />,

     
  
     
    },

    {
      path: "/download-excel",
      element: <DownloadComponent />,

    }


    
  
  ]);
export default routes 


// https://reactrouter.com/en/main/routers/create-browser-router
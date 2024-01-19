import React from "react";
import ReactDOM  from "react-dom/client";
// import App from "./App";
import routes from "./routes/index";
import { RouterProvider } from "react-router-dom";
import "./index.css";

const App = () => {
    return ( 
        <RouterProvider router={routes}  />  
    ); 
};

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />); 
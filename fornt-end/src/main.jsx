import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from './App';
import Menu from "./routes/Menu";
import Cadastro from "./routes/Cadastro";
import Login from "./routes/Login";


import './index.css';


const router = createBrowserRouter([


  {

    element: <App/>,
    
    children: [
      {
        path: "/btn2",
        element: <Menu /> 
      },
      {
        path: "/btn",
        element: <Cadastro /> 
      },
      {
        path: "/",
        element: <Login /> 
      },
      
    ],

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

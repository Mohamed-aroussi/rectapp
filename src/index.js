import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './App';
import Html from './page/html';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },


{
    path: "/html",
    element: <Html />,
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>
);


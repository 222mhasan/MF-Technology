import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Header from "./components/Header.jsx";
// import Banner from "./components/Banner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

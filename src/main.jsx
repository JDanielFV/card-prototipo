// src/main.jsx (o main.tsx)

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route } from "react-router-dom"; // Solo este, ya que Routes y Route van en App
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


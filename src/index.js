import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import "./css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import App from "./App";
import Registration from "./components/Registration";
import Login from "./components/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Login" element={<Login />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/Login" />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

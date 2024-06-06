import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import { Layout } from "./Layout";
import About from "./Pages/About";
import "./styles.scss";
import Accommodation from "./Pages/Accommodation.jsx";
import Error404 from "./Pages/Error404.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/logment/:id" element={<Accommodation />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

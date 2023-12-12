import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bookmark } from "./Pages/Bookmark";
import { History } from "./Pages/History";
import { Navbar } from "./Components/Navbar/Navbar";
import { MovieDetail } from "./Pages/MovieDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<App />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/history" element={<History />} />
        <Route path="/movie/:id" element={<MovieDetail/>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

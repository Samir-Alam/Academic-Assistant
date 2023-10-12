import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import "./App.css";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";

const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route index element = {<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  </div>
};

export default App;

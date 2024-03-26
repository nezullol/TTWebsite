import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./nav.js";
import Home from "./pages/Home.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import JsonData from "./data.json";

import Tetris from "./components/Tetris";

const App = () => {
  const [Data, setData] = useState({});
  useEffect(() => {
    setData(JsonData);
  },[]);
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/about" element={<About data={Data} />}></Route>

          <Route path="/" element={<Home data={Data} />}></Route>

          <Route path="/contact" element={<Contact data={Data} />}></Route>

          <Route path="/tetris" element={<Tetris />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

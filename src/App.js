// export default App;
import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
// menu icons
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";

// functional element
import Home from "./Components/Home";
import About from "./Components/About";
import Experiance from "./Components/Experiance";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Experiance" element={<Experiance />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <nav>
          <Link to="/">
            <AiOutlineHome />
          </Link>

          <Link to="/About">
            <AiOutlineUser />
          </Link>

          <Link to="/Experiance">
            <AiOutlineLineChart />
          </Link>

          <Link to="/Portfolio">
            <AiOutlineBook />
          </Link>

          <Link to="/Contact">
            <AiOutlineContacts />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default App;

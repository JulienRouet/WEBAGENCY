import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Navbar from "./components/Navbar/Navbar";
import { ThemeContext } from "./components/Context/ThemeContext";
import StudyCase from "./components/Works/StudyCase";


function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme ? "lightContent" : "darkContent"}>
      <Navbar />
      <div>{theme}</div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}></Route>
        <Route path="/works" element={<Works />}>
          <Route path="/works/:clientname" element={<StudyCase />}></Route>
        </Route>     
      </Routes>
    </div>
  );
}

export default App;


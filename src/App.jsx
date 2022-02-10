import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Works from "./components/Pages/Works/Works";
import ThemeContextProvider from "./Context/ThemeContext";
// import Projets from "./components/Projets/Projets";


const App = () => {
  
  return (
    
    <div className="App">    
      <ThemeContextProvider>                 
          <Navbar />       
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/works" element={<Works />}>
              </Route>
            </Routes>      
      </ThemeContextProvider> 
      <Home />
      </div>
      
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collection from "./components/Collection";


// Ensure proper spelling

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Use Routes instead of Router
import Main from "./components/Main";
import Models from "./components/Models";
import Contact from "./components/Contact";



const App = () => {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        {/* Background */}
        <div className="bg fixed -z-10 top-0 w-full h-full">
          <div className="absolute top-0 h-full w-full h-screen bg-black z-0">
            {/* Radial Gradient Circles */}
          </div>
        </div>

        <div className="relative z-10">
          {/* Define Routes Properly */}
          <Routes>
            <Route path="/" element={<Main/>} /> {/* Main route */}
            <Route path="/about" element={<About/>}/> 
            <Route path="/models" element={<Models/>}/> 
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<h1 className="text-white">Error: Page Not Found</h1>} /> {/* Catch-all error route */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
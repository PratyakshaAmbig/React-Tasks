import React from "react";
import Accordion from "./components/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StartRating from "./components/StartRating";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accordion" element={<Accordion/>}/>
          <Route path="/starRating" element={<StartRating/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

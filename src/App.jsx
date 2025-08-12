import React from "react";
import Accordion from "./components/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accordion" element={<Accordion/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

import React from "react";
import Accordion from "./components/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StartRating from "./components/StartRating";
import CopyText from "./components/CopyText";
import OTP from "./components/OTP";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accordion" element={<Accordion/>}/>
          <Route path="/starRating" element={<StartRating/>}/>
          <Route path="/copytext" element={<CopyText/>}/>
          <Route path="/otp" element={<OTP/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

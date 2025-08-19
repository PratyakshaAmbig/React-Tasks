import React from "react";
import Accordion from "./components/Accordion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import StartRating from "./components/StartRating";
import CopyText from "./components/CopyText";
import OTP from "./components/OTP";
import ImageCarouse from "./components/ImageCarouse";
import DragAndDrop from "./components/DragAndDrop";
import SearchBarTask from "./components/SearchBarTask";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/accordion" element={<Accordion/>}/>
          <Route path="/starRating" element={<StartRating/>}/>
          <Route path="/copytext" element={<CopyText/>}/>
          <Route path="/otp" element={<OTP/>}/>
          <Route path="/imagecarouse" element={<ImageCarouse/>}/>
          <Route path="/draganddrop" element={<DragAndDrop/>}/>
          <Route path="/searchbartask" element={<SearchBarTask/>}/>
        </Routes>
      </BrowserRouter>
  );
};

export default App;

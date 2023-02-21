import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontHero from "./Components/FrontHero";
import Login from "./Components/Login";
import Reg from './Components/Reg'

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontHero />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="reg" element={<Reg />}></Route>
    </Routes>
  );
}

export default App;

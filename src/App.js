import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FrontHero from "./Components/FrontHero";
import Login from "./Components/Login";
import Reg from "./Components/Reg";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Account from "./Components/Account";
import UpdateAccount from "./Components/UpdateAccount";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontHero />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="reg" element={<Reg />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="projects" element={<Projects />}></Route>
      <Route path="account" element={<Account />}></Route>
      <Route path="updateaccount" element={<UpdateAccount />}></Route>
    </Routes>
  );
}

export default App;

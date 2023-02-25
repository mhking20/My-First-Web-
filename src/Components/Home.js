import React from "react";
import "./Styles/Home.css";
import Nav from "./Nav";
import {Navfixed} from "./Nav";
import Foot from "./Foot";
import Intro from './Intro';

function Home() {
  return (
    <div className="vh-100 bg-info">
      <Nav />
      <Navfixed />
      <Intro/>
      <Foot />
    </div>
  );
}

export default Home;

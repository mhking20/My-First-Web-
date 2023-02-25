import React from "react";
import "./Styles/Projects.css";
import Nav from "./Nav";
import Foot from "./Foot";
import {Navfixed} from "./Nav";
import ProjectsContainer from './ProjectsContainer'

function Projects() {
  return (
    <div className="bg-info h-100">
      <Nav />
      <Navfixed />
      <ProjectsIntro />
      <ProjectsContainer />
      <Foot />
    </div>
  );
}

const ProjectsIntro = () => {
  return (
    <div className="container bg-dark  align-items-center justify-content-center text-light mt-3 mb-3 p-5">
      <h1 className=" align-items-center  justify-content-center d-flex text-lg text-md text-sm">
        My Projects
      </h1>
      <p className="underline m-auto mt-4 w-50"></p>
    </div>
  );
};

export default Projects;

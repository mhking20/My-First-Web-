import React, { useEffect } from "react";
import "./Styles/Projects.css";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import ProjectsContainer from "./ProjectsContainer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function Projects({ auth_state, loading }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!auth_state) {
      Navigate("/");
    }
  });

  if (loading) {
    return (
      <div className="container-fluid vh-100 text-align-center d-flex justify-content-center bg-light">
        <div className="w-50 h-50 m-auto text-align-center d-flex justify-content-center">
          <h1 className="text-align-center d-flex justify-content-center m-auto">
            Loading ...
          </h1>
        </div>
      </div>
    );
  } else {
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

const useStateToProps = (state) => {
  return {
    auth_state: state.auth,
    loading: state.loading,
  };
};

export default connect(useStateToProps)(Projects);

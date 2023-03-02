import React, { useEffect, useRef } from "react";
import "./Styles/Projects.css";
import Nav from "./Nav";
import Foot from "./Foot";
import { Navfixed } from "./Nav";
import ProjectsContainer from "./ProjectsContainer";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "./Middleware";

function Projects({ loading, Auth }) {
  const Navigate = useNavigate();
  const elRef = useRef();
  useEffect(() => {
    if (localStorage.getItem("demo") === "false") {
      Auth();
      if (localStorage.getItem("auth") === "false") {
        Navigate("/");
        const keys = ["token", "auth", "demo"];
        for (const key of keys) {
          localStorage.removeItem(key);
        }
      }
    }
    if (localStorage.getItem("demo") === "true") {
      elRef.current.classList.remove("h-100");
      elRef.current.classList.add("vh-100");
    }
    if (localStorage.getItem("theme_1") === "true") {
      elRef.current.classList.remove("bg-info", "bg-primary");
      elRef.current.classList.add("bg-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      elRef.current.classList.remove("bg-info", "bg-App");
      elRef.current.classList.add("bg-primary");
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
      <div className="bg-info h-100" ref={elRef}>
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
  const elRef = useRef(null);
  useEffect(() => {
    if (localStorage.getItem("theme_1") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-info",
        "text-dark"
      );
      elRef.current.classList.add("bg-App", "text-App");
    }
    if (localStorage.getItem("theme_2") === "true") {
      elRef.current.classList.remove(
        "bg-dark",
        "text-light",
        "bg-App",
        "text-App"
      );
      elRef.current.classList.add("bg-info", "text-dark");
    }
  });
  return (
    <div
      className="container bg-dark  align-items-center justify-content-center text-light mt-3 mb-3 p-5"
      ref={elRef}
    >
      <h1 className=" align-items-center  justify-content-center d-flex text-lg text-md text-sm">
        My Projects
      </h1>
      <p className="underline m-auto mt-4 w-50"></p>
    </div>
  );
};

const useStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

const useDispatchToProps = (dispatch) => {
  return {
    Auth: () => Auth(dispatch),
  };
};

export default connect(useStateToProps, useDispatchToProps)(Projects);

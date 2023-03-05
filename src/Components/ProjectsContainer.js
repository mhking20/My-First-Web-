import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Styles/Projects.css";
import img from "./images/img.jpg";

function ProjectsContainer() {
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
  if (localStorage.getItem("demo") === "false") {
    return (
      <div
        className="container-fluid bg-dark mt-5 mb-5 p-5 text-light "
        ref={elRef}
      >
        <div className="row text-align-center justify-content-center d-flex">
          <Link
            to="/task_manager"
            className="col-lg-3 col-md-5 col-sm-10 text-dark text-align-center justify-content-center d-flex shadow  p-2 mt-3 mb-3 ms-3 me-3"
          >
            <img src={img} alt="IMG" style={{ height: "200px" }}></img>
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="container-fluid bg-dark mt-5 mb-5 p-4 text-light text-align-center justify-content-center d-flex projects_container"
        ref={elRef}
      >
        <h3 className="pt-4 pb-4">
          Please Login or Register to access my projects
        </h3>
      </div>
    );
  }
}

export default ProjectsContainer;
